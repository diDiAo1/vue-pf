import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui' // 饿了么插件
import VueBlu from 'vue-blu'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import routers from './router/index'
import VueRouter from 'vue-router'
import base from './assets/js/base/base' // 自定义组件
import store from './store'

Vue.use(base)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueBlu)

// 路由初始化 history模式
var router = new VueRouter({
  routes: routers
})
    // 路由启用
const app = new Vue({
  router,
  store,
    // 监听路由检查登录
  watch: {
    '$route': 'checkLogin'
  },
  created () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
    // 检查是否存在userName
      if (!this.getcookie('userName')) {
        // 如果没有登录状态则跳转到登录页
        this.$router.push('/')
      }
    }
  },
  render: h => h(App)
}).$mount('#app')

export default app
