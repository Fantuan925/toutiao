import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
import Article from '@/views/article'
import local from '@/utils/local'

Vue.use(VueRouter)

// 配置规则：router/index.js
const router = new VueRouter({
  mode: 'history',
  // 路由规则选项 routes  若干规则
  routes: [{
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Home,
    children: [{
      path: '/',
      component: Welcome
    },
    {
      path: '/article',
      component: Article
    }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
  ]
})
// 添加路由的导航守卫
// 当每次跳转路由前触发
// to 跳转到目标 路由对象
// from 从哪里跳转过来  路由对象
// next 下一步方法  next()放行  next(‘/login’) 拦截
router.beforeEach((to, form, next) => {
  const user = local.getUser()
  if (user && user.token) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
