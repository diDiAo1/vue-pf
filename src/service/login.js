/**
 * Created by  on 2017/5/22.
 *  @author liqiuling
 */

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
var vm = new Vue()

// 系统登录连接后台请求
export const basicPlatformLogin = (options) => Vue.axios.get(
  // vm.requetHost+'/sys/user/login?loginName=admin&password=admin')
  vm.requetHost + 'sys/user/login', {params: options})

// 系统退出连接后台请求
export const basicPlatformLogout = () => Vue.axios.post(
  vm.requetHost + 'sys/user/logout')

// 修改密码
export const updatePwd = (options) => Vue.axios.get(
  vm.requetHost + 'sys/user/changePass',
  {params: options})
