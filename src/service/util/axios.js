import axios from 'axios'

axios.defaults.timeout = 5000
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'http://192.168.64.110:8086/'                 // api默认路由地址

export default {
  setAxiosGetPromise: (url, params = {}) => {
    return axios.get(url, {params: params}).then(response => {
      return response
    }).catch(err => {
      throw err
    })
  },
  setAxiosPostPromise: (url, data) => {
    return axios.post(url, data).then(response => {
      return response
    }).catch(err => {
      throw err
    })
  }
}
