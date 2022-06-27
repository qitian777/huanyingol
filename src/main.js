import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from './router'
import store from './store'
//引入ElementUI组件库
import ElementUI from 'element-ui';
//引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css';
//引入阿里图标
import './assets/iconfont.js'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  error: require('@/assets/loading.gif'),
  loading: require('@/assets/loading.gif')
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.config.productionTip = false
//应用ElementUI
Vue.use(ElementUI);
//应用路由
Vue.use(VueRouter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
