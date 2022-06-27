import apiUser from '@/api/user'
import Vue from 'vue'
import Vuex from 'vuex'
import Stomp from 'stompjs'
import SockJS from 'sockjs-client'
import { MessageBox } from 'element-ui';
import apiFriend from '@/api/friend'
import { commonInfo, successInfo } from '@/util/info'
import apiMessage from '@/api/message'
import router from '@/router'

Vue.use(Vuex)
const now = new Date();

const store = new Vuex.Store({
  state: {
    user: {},
    isLogged: false,
    friends: [],
    sessions: {},
    totalUnread: 0,
    stomp: null,
    friends: [],
    currentSessionName: '',
    loginRouter: [
      {
        path: '/user/info',
        component: () => import('@/views/userinfo/UserInfo'),
      },
      {
        path: '/user/subscribe',
        component: () => import('@/views/subscribe/Subscribe'),
      },
      {
        path: '/user/chat',
        component: () => import('@/views/chat/Chat'),
      },
    ]
  },
  getters: {

  },
  mutations: {
    SET_USER(state, value) {
      state.user = value
      state.isLogged = true
      if (state.isLogged) {
        router.addRoutes(state.loginRouter)
      }
    },
    DELETE_USER(state) {
      localStorage.removeItem('tokenStr')
      sessionStorage.removeItem('tokenStr')
      sessionStorage.removeItem('user')
      sessionStorage.removeItem('isLogged')
      state.isLogged = false
      state.user = {}
    },
    CHANGE_CURRENT_SESSION_NAME(state, name) {
      state.currentSessionName = name;
    },
    ADD_MESSAGE(state, msg) {
      if (self) {
        if (!state.sessions[msg.to]) {
          Vue.set(state.sessions, msg.to, []);
        }
        state.sessions[msg.to].push(msg)
      } else {
        if (!state.sessions[msg.from]) {
          Vue.set(state.sessions, msg.from, []);
        }
        state.sessions[msg.from].push(msg)
      }
    },
    INIT_FRIENDS(state, friends) {
      for (var i = 0; i < friends.length; i++) {
        friends[i].unread = 0
      }
      state.friends = friends;
      if (friends.length > 0) {
        state.currentSessionName = friends[0].username
      }
      // let data = localStorage.getItem('vue-chat-session');
      // if (data) {
      //   state.sessions = JSON.parse(data);
      // }
    },
    SET_UNREAD(state, name) {
      var friends = state.friends
      for (var i = 0; i < friends.length; i++) {
        if (friends[i].username == name) {
          friends[i].unread = friends[i].unread + 1
          state.totalUnread = state.totalUnread + 1
        }
      }
      state.friends = friends
    },
    RESET_UNREAD(state, name) {
      var friends = state.friends
      for (var i = 0; i < friends.length; i++) {
        if (friends[i].username == name) {
          state.totalUnread = state.totalUnread - friends[i].unread
          friends[i].unread = 0
        }
      }
      state.friends = friends
    },
  },
  actions: {
    // 初始化用户
    async initUser(context, user) {
      context.commit('SET_USER', user)
      this.dispatch("connect");
      await this.dispatch('initData')
    },

    // 初始化好友及消息
    initData(context) {
      apiFriend.getFriendList().then(data => {
        if (data.code == 200) {
          localStorage.removeItem('vue-chat-session')
          // 好友数量不为零
          if (data.object.length > 0) {
            // 初始化好友列表
            context.commit('INIT_FRIENDS', data.object);
            // 初始化历史消息
            apiMessage.getMessageList().then(data => {
              if (data.code == 200) {
                for (let msg of data.object) {
                  if (msg.from == this.state.user.username) {
                    // 自己发的消息
                    msg.self = true
                    context.commit("ADD_MESSAGE", msg)
                  } else {
                    this.dispatch('handleMessage', msg)
                  }
                }
              }
            })
          }
        }
      })
    },

    // 获取用户信息
    async getUserInfo(context) {
      if (sessionStorage.getItem("user")) {
        // session中保存了用户信息
        this.dispatch('initUser', JSON.parse(sessionStorage.getItem("user")))
      } else {
        // 从后端获取用户信息
        await apiUser.getInfo().then(data => {
          if (data.code == 200) {
            sessionStorage.setItem("user", JSON.stringify(data.object))
            sessionStorage.setItem("isLogged", true)
            this.dispatch('initUser', data.object)
          }
        })
      }
    },

    // websocket连接
    connect(context) {
      context.state.stomp = Stomp.over(new SockJS('/hu/wbs/ep', 10));
      let token = ''
      if (sessionStorage.getItem("tokenStr")) {
        token = sessionStorage.getItem("tokenStr");
      } else {
        token = localStorage.getItem("tokenStr");
      }
      context.state.stomp.connect({ 'Auth-Token': token }, success => {
        context.state.stomp.subscribe('/user/queue/chat', msg => {
          let receiveMsg = JSON.parse(msg.body);
          this.dispatch('handleMessage', receiveMsg)
        })
      }, error => {
      })
    },

    handleMessage(context, receiveMsg) {
      if (receiveMsg.state != 1 && receiveMsg.apply === 1) {
        MessageBox.confirm(receiveMsg.content, '好友申请', {
          confirmButtonText: '添加',
          cancelButtonText: '拒绝',
          type: 'success'
        }).then(() => {
          let msgObj = {};
          msgObj.to = receiveMsg.from;
          msgObj.from = receiveMsg.to;
          msgObj.apply = 2
          msgObj.content = msgObj.from + " 同意了你的好友申请";
          apiFriend.addFriend({ friendName: msgObj.to }).then(data => {
            if (data.code == 200) {
              this.dispatch('initData')
            }
          })
          context.state.stomp.send('/wbs/chat', {}, JSON.stringify(msgObj));
          apiMessage.updateState({ from: msgObj.to })
        }).catch(() => {
          let msgObj = {};
          msgObj.to = receiveMsg.from;
          msgObj.from = receiveMsg.to;
          msgObj.apply = -1
          context.state.stomp.send('/wbs/chat', {}, JSON.stringify(msgObj));
          commonInfo('已拒绝' + receiveMsg.from + '的好友申请')
          apiMessage.updateState({ from: msgObj.to })
        });
      } else if (receiveMsg.state != 1 && receiveMsg.apply === 2) {
        successInfo(receiveMsg.from + ' 和你已经是好友了，现在可以开始聊天了！')
        apiMessage.updateState({ from: receiveMsg.from })
        this.dispatch('initData')
      } else if (receiveMsg.state != 1 && receiveMsg.apply === -1) {
        commonInfo(receiveMsg.from + ' 拒绝了你的好友申请！')
        apiMessage.updateState({ from: receiveMsg.from })
      } else {
        if (receiveMsg.state == 0) {
          context.commit('SET_UNREAD', receiveMsg.from)
        }
        receiveMsg.self = false;
        receiveMsg.to = receiveMsg.from;
        context.commit('ADD_MESSAGE', receiveMsg);
      }
    },

    updateState(context, name) {
      apiMessage.updateState({ from: name })
      context.commit('RESET_UNREAD', name)
    }
  },
  modules: {
  }
})

store.watch(function (state) {
  return state.sessions
}, function (val) {
  localStorage.setItem('vue-chat-session', JSON.stringify(val));
}, {
  deep: true/*这个貌似是开启watch监测的判断,官方说明也比较模糊*/
})

export default store;