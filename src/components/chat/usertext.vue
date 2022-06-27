<template>
  <div id="uesrtext">
    <textarea
      placeholder="按 Ctrl + Enter 发送"
      v-model="content"
      v-on:keyup="addMessage"
    >
    </textarea>
    <div class="button">
      <button class="button1" style="margin-right:270px" @click="deleteFriend">删除好友</button>
      
      <button class="button2" @click="content = ''">清空</button>
      <button class="button2" @click="sendMsg">发送</button>
    </div>
  </div>
</template>

<script>
import apiFriend from "@/api/friend";
import { warningInfo } from "@/util/info";
import { mapState } from "vuex";

export default {
  name: "uesrtext",
  data() {
    return {
      content: "",
    };
  },
  computed: {
    ...mapState(["currentSessionName"]),
  },
  methods: {
    deleteFriend(){
      apiFriend.deleteFriend({friendName:this.currentSessionName}).then(data=>{
        if(data.code==200){
          this.$store.dispatch('initData')
        }
      })
    },
    addMessage(e) {
      if (e.ctrlKey && e.keyCode === 13 && this.content.length) {
        // this.$store.commit('addMessage', this.content);
        // this.content = '';
        this.sendMsg();
      }
    },
    sendMsg() {
      if (this.content.trim() === "") {
        warningInfo("请输入消息！");
        return;
      }
      if (this.$store.state.stomp.connected) {
        let msgObj = {};
        msgObj.to = this.currentSessionName;
        msgObj.content = this.content;
        this.$store.state.stomp.send("/wbs/chat", {}, JSON.stringify(msgObj));
        const myDate = new Date();
        msgObj.createTime = myDate.toLocaleString();
        msgObj.self = true;
        this.$store.commit("ADD_MESSAGE", msgObj);
        this.content = "";
      } else {
        this.$message({
          showClose: true,
          message: "已断开连接，请尝试刷新页面！",
          type: "error",
        });
      }
    },
  },
};
</script>

<style scoped>
#uesrtext {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 30%;
  border-top: solid 1px #ddd;
}

#uesrtext textarea {
  padding: 10px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
}

.button {
  position: relative;
  bottom: 70px;
  left: 10px;
}

.button button {
  background: #ffffff;
  margin: 0 10px;
}


.button1 {
  padding: 3px 8px;
  font-size: 12px;
  border-radius: 8px;
}
.button2 {
  padding: 5px 13px;
  font-size: 16px;
  border-radius: 12px;
}
</style>
