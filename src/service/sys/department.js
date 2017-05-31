
/**
 * Mocking client-server processing
 */

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)


// 连接后台操作部门
export  const  getDepartmentTreeData = () => Vue.axios.get(
  '/TonikIntegration/servlet/departmentServlet');
