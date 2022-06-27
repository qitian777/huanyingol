import store from '@/store'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/index/Index'),
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('@/views/movie/Movie'),
  },
  {
    path: '/drama',
    name: 'drama',
    component: () => import('@/views/drama/Drama'),
  },
  {
    path: '/comic',
    name: 'comic',
    component: () => import('@/views/comic/Comic'),
  },
  {
    path: '/detail/:id',
    component: () => import('@/views/detail/Detail'),
  },
  {
    path: '/search/:keyword/:page?',
    component: () => import('@/views/search/Search'),
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login'),
  },

  {
    path: '/register',
    component: () => import('@/views/register/Register'),
    meta: { isAuth: false, title: '幻影在线--用户注册' }
  },

  {
    path: '/devLog',
    component: () => import('@/views/devlog/DevLog'),
  },
  {
    path: '*',
    name: '/404',
    component: () => import('@/views/nopage/NoPage'),
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  if (localStorage.getItem('tokenStr') || sessionStorage.getItem('tokenStr')) {
    if (!store.state.isLogged) {
      await store.dispatch('getUserInfo')
      await next(to.fullPath)
    } else {
      next()
    }
    next()
  }
  next()
})

export default router
