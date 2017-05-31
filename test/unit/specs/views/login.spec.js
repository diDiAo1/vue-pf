/**
 * @file login.vue测试用例
 * @author liqiuling
 */

// 引用vue
import Vue from 'vue';
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import loginVuex from './../../../../src/store/modules/login.js'
// 引用要测试的组件
import login from './../../../../src/views/login.vue'

Vue.use(Vuex)
Vue.use(ElementUI);
Vue.use(VueRouter);
//const inject = require('!!vue?inject!login.vue'); // 行内写法
const store = new Vuex.Store({
  state: {
    user: {}
  },
  actions: {
    loginSystem({ commit }, options) {
        return new Promise((res) => {
          const data = {
              "msg": "登录成功！",
              "user": {
                "id": 1,
                "userId": "1",
                "userName": "xiaoyu",
                "loginName": "admin",
                "password": "3371782897fcd53ad5f23cc76d5f2d6c",
                "depId": "1",
                "posId": "1",
                "enable": 1,
                "createUser": "xiaoyu",
                "updateUser": "xiaoyu",
                "createTime": "2017-05-22T09:01:23Z",
                "updateTime": "2017-05-22T09:02:18Z"
              },
              "status": "200"
              }; // 模拟数据
          commit('LOGIN', data);
        })
    },
  },// mutations同步 修改state
 mutations : {
    ['LOGIN'](state, data) {
        state.user = data.user
    }
}
});
const loginComponent = Vue.extend({ ...login, store });
const vm = new loginComponent().$mount(); // 生成实例
vm.userMes = {
  userName: 'admin',
  password: 'admin'
}
// 要测试内容
describe('login', () => {
    // 这里将app生成vue实例，并使用 $mount() 模拟挂载状态
  // 检查原始组件选项
  it('has a created hook', () => {
    expect(typeof login.created).to.equal('function')
  })

  it('should render correct contents', () => {
    // 断言组件的vm.msg是否变为了'登录页面'
    expect(vm.msg).to.equal('登录页面')
  })

  it('登录操作',()=>{
    // 这里将app生成vue实例，并使用 $mount() 模拟挂载状态
    // return vm.login('admin','admin').then(message => {
    //   expect(message.status).to.equal('200')
    // })
    vm.login()
    const result = vm.$store.state.user
    expect(result).to.deep.equal({
                "id": 1,
                "userId": "1",
                "userName": "xiaoyu",
                "loginName": "admin",
                "password": "3371782897fcd53ad5f23cc76d5f2d6c",
                "depId": "1",
                "posId": "1",
                "enable": 1,
                "createUser": "xiaoyu",
                "updateUser": "xiaoyu",
                "createTime": "2017-05-22T09:01:23Z",
                "updateTime": "2017-05-22T09:02:18Z"
              })
  })
})