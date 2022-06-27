<template>
  <el-row>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>用户信息</h3>
      </div>
      <el-upload
        class="upload-center"
        action="/hu/upload"
        :headers="header"
        :on-success="onSuccess"
        accept="image/png,image/jpg,image/jpeg"
        :show-file-list="false"
        :before-upload="beforeAvatarUpload"
      >
        <img :src="getSrc()" />
        <div slot="tip" class="el-upload__tip">
          点击头像上传新头像，限jpg/png格式，且不超过500kb
        </div>
      </el-upload>
      <div>
        用户名：
        <el-tag>{{ user.username }}</el-tag>
      </div>
      <div>
        邮&#12288;箱：
        <el-tag>{{ user.email }}</el-tag>
      </div>
      <div>
        昵&#12288;称：
        <el-tag>{{ user.nickname }}</el-tag>
        <el-button
          type="text"
          style="float: right; margin-right: 50px"
          @click="dialogVisible = true"
          >修改昵称
        </el-button>
      </div>
      <el-button type="primary" style="margin-left: 50px" @click="dialogVisible2 = true"
        >修改邮箱</el-button
      >
      <el-button
        type="warning"
        style="float: right; margin-right: 50px"
        @click="dialogVisible3 = true"
        >修改密码
      </el-button>
    </el-card>
    <el-dialog title="修改昵称" :visible.sync="dialogVisible" width="350px">
      <el-input placeholder="请输入新昵称" v-model="nickname" clearable> </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="alterNickname">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="修改邮箱需要验证密码" :visible.sync="dialogVisible2" width="350px">
      <el-input
        placeholder="请输入新邮箱"
        v-model="email"
        clearable
        style="margin-bottom: 50px"
      >
      </el-input>
      <el-input placeholder="请输入密码" v-model="password" type="password" clearable>
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="alterEmail">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="修改密码需要验证旧密码"
      :visible.sync="dialogVisible3"
      width="350px"
    >
      <el-input
        placeholder="请输入新密码"
        v-model="newPw"
        clearable
        type="password"
        style="margin-bottom: 30px"
      >
      </el-input>
      <el-input
        placeholder="请再次输入新密码"
        v-model="newPw2"
        type="password"
        clearable
        style="margin-bottom: 30px"
      >
      </el-input>
      <el-input placeholder="请输入旧密码" v-model="password" type="password" clearable>
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible3 = false">取 消</el-button>
        <el-button type="primary" @click="alterPassword">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script>
import apiUser from "@/api/user";

import { mapState } from "vuex";
import { encrypt } from "@/util/aesUtil";

export default {
  name: "UserInfo",
  data() {
    return {
      dialogVisible: false,
      dialogVisible2: false,
      dialogVisible3: false,
      nickname: "",
      email: "",
      password: "",
      newPw: "",
      newPw2: "",
      header: {
        Authorization:
          localStorage.getItem("tokenStr") || sessionStorage.getItem("tokenStr"),
      },
      fileName: "",
    };
  },
  computed: {
    ...mapState(["user", "isLogged"]),
  },
  methods: {
    getSrc() {
      return "/images/" + this.user.picture;
    },
    alterNickname() {
      if (this.nickname.trim() !== "" && this.nickname.trim() !== this.user.nickname) {
        apiUser.updateInfo({ nickname: this.nickname }).then((data) => {
          if (data.code == 200) {
            sessionStorage.removeItem("user");
            this.$store.dispatch("getUserInfo");
            this.dialogVisible = false;
            this.nickname = "";
          }
        });
      } else {
        this.warningMessage("新昵称应为非空字符串，且不应与旧昵称相同！");
      }
    },
    alterEmail() {
      if (this.password.trim() === "") {
        this.warningMessage("请输入密码");
        return;
      }
      const mail_filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (mail_filter.test(this.email)) {
        apiUser
          .updateInfo({ email: this.email, password: encrypt(this.password) })
          .then((data) => {
            if (data.code == 200) {
              sessionStorage.removeItem("user");
              this.$store.dispatch("getUserInfo");
              this.dialogVisible2 = false;
              this.email = "";
              this.password = "";
            }
          });
      } else {
        this.warningMessage("请正确输入邮箱！");
      }
    },
    async alterPassword() {
      if (this.newPw.trim() === "" || this.password.trim() === "") {
        this.warningMessage("请根据提示输入密码！");
        return;
      }
      if (this.newPw.trim() !== this.newPw2.trim()) {
        this.warningMessage("两次输入的新密码不一致！");
        return;
      }
      apiUser
        .updateInfo({ password: encrypt(this.password), newPassword: this.newPw })
        .then((data) => {
          if (data.code == 200) {
            apiUser.logOut().then((resp) => {
              if (resp.code == 200) {
                this.$store.commit("DELETE_USER");
                this.$router.push({ path: "/login" });
              }
            });
          }
        });
    },
    warningMessage(message) {
      this.$message({
        showClose: true,
        message: message,
        type: "warning",
      });
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 < 500;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG或PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 500KB!");
      }
      this.fileName =
        this.user.username + "." + file.name.substring(file.name.lastIndexOf(".") + 1);
      return isJPG && isLt2M;
    },
    onSuccess() {
      sessionStorage.removeItem("user");
      this.$store.dispatch("getUserInfo");
    },
    // async logout(context, path) {
    //   if (!this.isLogged) {
    //     apiUser.logOut();

    //   }
    // },
  },
};
</script>

<style scoped>
.box-card {
  min-width: 350px;
  max-width: 500px;
  margin: 80px auto 200px;
  font-size: 18px;
  font-weight: bold;
}

.box-card img {
  height: 150px;
  width: 150px;
  border-radius: 75px;
}

.upload-center {
  width: 150px;
  margin: 0 auto;
}

.box-card div {
  margin-bottom: 20px;
}

.el-tag {
  font-size: 16px;
}
</style>
