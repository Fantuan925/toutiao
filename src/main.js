import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
import axios from '@/api'
import plugin from '@/components'

Vue.use(plugin)
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// main.js职责入口文件
// 1.创建根实例
// 2.依赖项目需要的全局资源
