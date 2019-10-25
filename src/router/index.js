import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'

Vue.use(VueRouter)

// 配置规则：router/index.js
const router = new VueRouter({
  // 路由规则选项 routes  若干规则
  routes: [{
    path: '/login',
    component: Login
  }]
})
export default router
