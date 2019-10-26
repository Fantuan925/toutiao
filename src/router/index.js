import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'

Vue.use(VueRouter)

// 配置规则：router/index.js
const router = new VueRouter({
  mode: 'history',
  // 路由规则选项 routes  若干规则
  routes: [{
    path: '/login',
    component: Login
  }, {
    path: '/',
    component: Home,
    children: [{
      path: '/',
      component: Welcome
    }]
  },
  {
    path: '*',
    component: NotFound
  }
  ]
})
export default router
