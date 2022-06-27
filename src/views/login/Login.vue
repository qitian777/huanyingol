<template>
  <div>
    <el-form :model="ruleForm" ref="ruleForm" :rules="rules" class="loginContainer">
      <h3 class="loginTitle">登录</h3>
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="ruleForm.username"
          autocomplete="off"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code" style="padding: 0">
        <el-input
          size="normal"
          type="text"
          v-model="ruleForm.code"
          auto-complete="false"
          placeholder="点击图片更换验证码"
          style="width: 245px; margin-right: 5px"
        ></el-input>
        <img :src="captchaUrl" @click="updateCaptcha" class="float-right" />
        <!-- <img
          src="http://localhost:8082/captcha"
          @click="updateCaptcha"
          class="float-right"
        /> -->
      </el-form-item>
      <el-checkbox class="loginRemember" v-model="ruleForm.rememberMe"
        >记住我</el-checkbox
      >
      <el-button type="primary" style="width: 100%" @click="submitLogin">登录</el-button>
      <div align="center" style="margin-top: 20px">
        <span class="register"
          >没有账号？<router-link to="/register" style="color: #409eff"
            >点我注册</router-link
          ></span
        >
      </div>
    </el-form>
  </div>
</template>

<script>
import apiUser from "@/api/user";
import { mapState } from "vuex";
import { encrypt } from "@/util/aesUtil";

export default {
  name: "Login",
  data() {
    return {
      // captchaUrl: '/captcha?time=' + new Date(),
      captchaUrl: "/hu/captcha",
      ruleForm: {
        username: "",
        password: "",
        code: "",
        rememberMe: true,
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
        code: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur",
          },
        ],
      },
      beforeUrl: "/",
    };
  },
  computed: {
    ...mapState(["isLogged"]),
  },
  methods: {
    //登录
    submitLogin() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          let param = {
            username: this.ruleForm.username,
            password: encrypt(this.ruleForm.password),
            captcha: this.ruleForm.code,
            rememberMe: this.ruleForm.rememberMe,
          };
          apiUser.login(param).then((data) => {
            if (data.code === 200) {
              const tokenStr = data.object.tokenHead + data.object.token;
              if (this.ruleForm.rememberMe) {
                window.localStorage.setItem("tokenStr", tokenStr);
              } else {
                window.sessionStorage.setItem("tokenStr", tokenStr);
              }
              this.$store.dispatch("initUser", data.object.user);
              //页面跳转
              this.$router.replace(this.beforeUrl);
            }
          });
        } else {
          this.$message.error("请输入所有字段");
          return false;
        }
      });
    },
    updateCaptcha() {
      //验证码
      // this.captchaUrl = '/captcha?time=' + new Date();
      this.captchaUrl = "/hu/captcha?time=" + new Date();
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // 通过 `vm` 访问组件实例,将值传入oldUrl
      if (from.path == "/register") {
        vm.beforeUrl = "/";
      } else {
        vm.beforeUrl = from.fullPath;
      }
    });
  },
  created() {
    if (this.isLogged) {
      this.$router.replace(this.beforeUrl);
    }
  },
};
</script>

<style scoped></style>
