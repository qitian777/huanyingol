<template>
  <div id="app">
    <el-container>
      <el-header>
        <TopBar></TopBar>
        <NavMenu></NavMenu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: { TopBar, NavMenu, Footer },
  // created() {
  //   if (sessionStorage.getItem("tokenStr")||localStorage.getItem("tokenStr")) {
  //     this.$store.dispatch("getUserInfo");
  //     this.$store.commit('ADD_ROUTER')
  //   }
  // },
};
</script>

<style>
.el-main {
  margin-top: 50px;
}

.el-empty {
  min-height: 500px;
}

.p1 {
  padding: 10px 10px 10px 0;
}

.m-0 {
  margin: 0;
}

.pt-3 {
  padding-top: 8px;
}

.p-3 {
  padding: 10px 20px;
}

.float-right {
  float: right;
}

.float-left {
  float: left;
}

.clear-float {
  clear: both;
}

a {
  color: #000000;
  text-decoration: none;
}

.index-body {
  max-width: 1200px;
}

.body-center {
  max-width: 1200px;
  margin: 0 auto;
}

/*文本溢出*/
.text-over {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

/*阿里图标*/
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

/*主页style链接*/
.index-list {
  border: 1px solid #09bb07;
  width: 100%;
  padding: 10px;
  display: block;
  text-align: center;
  border-radius: 5px;
  color: #09bb07;
}

.index-list:hover {
  background: #09bb07;
  color: white;
}

/*  list页面  */
.list-active {
  background: #09bb07;
  color: #fff;
}

.sort-list {
  padding-left: 73px;
  text-indent: -73px;
}

.sort-list a {
  padding: 2px 5px;
  border-radius: 5px;
  word-break: break-all;
  line-height: 200%;
}

.sort-list span {
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.4);
}

/*登录注册页面*/
.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.loginTitle {
  margin: 0 auto 40px auto;
  text-align: center;
  color: #505458;
}

.loginRemember {
  text-align: left;
  margin: 0px 0px 15px 0px;
}
</style>
