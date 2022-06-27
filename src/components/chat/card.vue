<template>
  <div id="card">
    <header>
      <img class="avatar" v-bind:src="'/images/' + user.picture" v-bind:alt="user.name" />
      <p class="name">{{ user.username }}</p>
    </header>
    <footer>
      <input class="search" type="text" v-model="friend" placeholder="添加好友..." />
      <button @click="beFriend">添加</button>
    </footer>
  </div>
</template>

<script>
import apiFriend from "@/api/friend";
import { mapState } from "vuex";
import { successInfo, warningInfo } from '@/util/info';

export default {
  name: "card",
  computed: {
    ...mapState(["user"]),
  },
  data() {
    return {
      friend: "",
    };
  },
  methods: {
    beFriend() {
      if (this.friend.trim() === this.user.username) {
        return;
      }
      apiFriend.checkUser({ friendName: this.friend }).then((data) => {
        if (data.object == 0) {
          let msgObj = {};
          // msgObj.to = this.currentSession.username;
          msgObj.to = this.friend;
          msgObj.apply = 1;
          msgObj.content = this.user.username + " 请求加你为好友";
          this.$store.state.stomp.send("/wbs/chat", {}, JSON.stringify(msgObj));
          successInfo("申请已发送！");
        }else if(data.object ==-1){
            warningInfo("用户不存在！");
        }else if(data.object >0){
            warningInfo("你们已是好友！");
        }
      });
    },
  },
};
</script>

<style scoped>
footer {
  position: relative;
}

footer button {
  position: absolute;
  right: 0;
  top: 5px;
  border-radius: 10px;
  background: #26292e;
  color: #ffffff;
}

#card {
  padding: 12px;
}

.avatar {
  width: 40px;
  height: 40px;
  vertical-align: middle; /*这个是图片和文字居中对齐*/
}

.name {
  display: inline-block;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
}

.search {
  width: 150px;
  background: #26292e;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  border: 1px solid #3a3a3a;
  border-radius: 4px;
  outline: none; /*鼠标点击后不会出现蓝色边框*/
  color: #fff;
}
</style>
