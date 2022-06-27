<template>
  <el-row>
    <el-col :span="6">
      <h1>幻影在线</h1>
    </el-col>
    <el-col :span="12" align="center">
      <el-input
        class="search"
        placeholder="请输入内容"
        v-model="input"
        clearable
        @keyup.enter.native="search"
      >
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </el-col>
    <el-col :span="6" align="right">
      <router-link to="/login" v-if="!isLogged"
        ><img src="/images/login.png" alt=""
      /></router-link>
      <el-dropdown v-else trigger="click">
        <span class="el-dropdown-link">
          <el-badge :value="totalUnread" class="item" :hidden="totalUnread == 0">
            <img :src="getSrc(user)" alt="" />
          </el-badge>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link to="/user/info">个人中心</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/user/chat">在线聊天</router-link>
            <el-badge :value="totalUnread" class="item" v-show="totalUnread != 0">
            </el-badge>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/user/subscribe">收藏订阅</router-link>
          </el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import apiUser from "@/api/user";
import { mapState } from "vuex";

export default {
  name: "TopBar",
  data() {
    return {
      input: "",
    };
  },
  computed: {
    ...mapState(["user", "isLogged", "totalUnread"]),
  },
  methods: {
    search() {
      if (this.input.trim() === "") {
        this.$message({
          showClose: true,
          message: "搜索关键字不能为空！",
          type: "warning",
        });
        return;
      }
      this.$router.push("/search/" + this.input.trim());
    },
    getSrc(user) {
      return "/images/" + user.picture;
    },
    logout() {
      apiUser.logOut().then((resp) => {
        if (resp.code == 200) {
          this.$store.commit("DELETE_USER");
          this.$router.replace({ path: "/" });
          location.reload();
        }
      });
    },
  },
};
</script>

<style scoped>
img {
  width: 38px;
  height: 38px;
  border-radius: 20px;
}

.search {
  max-width: 540px;
}

h1 {
  margin: 0;
  padding: 0;
  font-size: 30px;
}
</style>
