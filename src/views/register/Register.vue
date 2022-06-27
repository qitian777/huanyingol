<template>
  <div>
    <el-form :model="ruleForm" ref="ruleForm" :rules="rules" class="loginContainer">
      <h3 class="loginTitle">注册</h3>
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="ruleForm.username"
          autocomplete="off"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="nickname">
        <el-input
          type="text"
          v-model="ruleForm.nickname"
          autocomplete="off"
          placeholder="请输入昵称"
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
      <el-form-item prop="password1">
        <el-input
          type="password"
          v-model="ruleForm.password1"
          autocomplete="off"
          placeholder="请确认密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input
          type="text"
          v-model="ruleForm.email"
          autocomplete="off"
          placeholder="请输入邮箱"
        ></el-input>
      </el-form-item>
      <el-form-item prop="emailCode">
        <el-input
          type="text"
          v-model="ruleForm.emailCode"
          autocomplete="off"
          placeholder="点击按钮获取邮箱验证码"
          style="width: 200px"
        ></el-input>
        <el-button
          type="success"
          round
          class="float-right"
          :disabled="sent"
          @click="getEmailCode"
        >
          {{ sendMail }}
        </el-button>
      </el-form-item>
      <el-form-item prop="captcha" style="padding: 0">
        <el-input
          size="normal"
          type="text"
          v-model="ruleForm.captcha"
          auto-complete="false"
          placeholder="点击图片更换验证码"
          style="width: 245px; margin-right: 5px"
        ></el-input>
        <img :src="captchaUrl" @click="updateCaptcha" class="float-right" />
      </el-form-item>
      <el-button type="primary" style="width: 100%" @click="submitLogin">注册</el-button>
      <div align="center" style="margin-top: 20px">
        <span class="register"
          >已有账号？<router-link to="/login" style="color: #409eff"
            >点我登录</router-link
          ></span
        >
      </div>
    </el-form>
  </div>
</template>

<script>
import apiUser from "@/api/user";
import { warningInfo } from "@/util/info";
import { mapState } from "vuex";

export default {
  name: "Register",
  data() {
    const validatePwd = (rule, value, callback) => {
      const reg = /^[a-zA-Z]\w{5,16}$/;
      if (!reg.test(value)) {
        callback(
          new Error("密码以字母开头，长度在6~17之间，只能包含字母、数字和下划线！")
        );
      } else {
        callback();
      }
    };
    const validatePwd1 = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        callback(new Error("两次输入的密码不一致！"));
      } else {
        callback();
      }
    };
    const validateUsername = (rule, value, callback) => {
      let regUsername = /^[a-zA-Z]\w{4,15}$/;
      if (!regUsername.test(value)) {
        callback(
          new Error("用户名应以字母开头，由字母、数字和下划线构成，长度为5-16个字符")
        );
      } else {
        apiUser.checkUsername({ username: value }).then((resp) => {
          if (resp.object > 0) {
            callback(new Error("用户名已被注册！"));
          } else {
            callback();
          }
        });
      }
    };
    const validateEmail = (rule, value, callback) => {
      let regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!regEmail.test(value)) {
        callback(new Error("请正确输入邮箱！"));
      } else {
        callback();
      }
    };
    const validateEmailCode = (rule, value, callback) => {
      let regEmailCode = /^\d{6}$/;
      if (!regEmailCode.test(value)) {
        callback(new Error("邮箱验证码为6位数字！"));
      } else {
        callback();
      }
    };
    return {
      captchaUrl: "/hu/captcha",
      ruleForm: {
        username: "",
        nickname: "",
        password: "",
        password1: "",
        email: "",
        emailCode: "",
        captcha: "",
      },
      sendMail: "验证邮箱",
      sent: false,
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { validator: validateUsername, trigger: "blur" },
        ],
        nickname: [
          { required: true, message: "昵称不能为空", trigger: "blur" },
          { min: 3, max: 11, message: "昵称长度应在3-11之间", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: validatePwd, trigger: "blur" },
        ],
        password1: [
          { required: true, message: "请确认密码", trigger: "blur" },
          { validator: validatePwd1, trigger: "blur" },
        ],
        email: [
          { required: true, message: "请确认密码", trigger: "blur" },
          { validator: validateEmail, trigger: "blur" },
        ],
        emailCode: [
          { required: true, message: "请确认密码", trigger: "blur" },
          { validator: validateEmailCode, trigger: "blur" },
        ],
        captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  computed: {
    ...mapState(["beforeLogin"]),
  },
  methods: {
    //登录
    submitLogin() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          apiUser.createUser(this.ruleForm).then((resp) => {
            if (resp.code == 200) {
              this.$router.push("/login");
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
      this.captchaUrl = "/hu/captcha?time=" + new Date();
    },
    getEmailCode() {
      let regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!regEmail.test(this.ruleForm.email)) {
        warningInfo("请正确输入邮箱！");
        return;
      }
      apiUser.getEmailCode({ email: this.ruleForm.email }).then((resp) => {
        if (resp.code == 200) {
          if (resp.object === 1) {
            this.sent = true;
            this.emailButton();
          }
        }
      });
    },
    emailButton() {
      let count = 30;
      let time = setInterval(() => {
        count--;
        if (count === 0) {
          this.sendMail = "重新发送";
          this.sent = false;
          clearInterval(time);
        } else {
          this.sendMail = "已发送(" + count + ")";
        }
      }, 1000);
    },
  },
};
</script>

<style scoped></style>
