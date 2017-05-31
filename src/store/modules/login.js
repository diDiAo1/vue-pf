/**
 * Created by  on 2017/5/22.
 *  @author liqiuling
 */

import api from '../../service'
import * as types from '../mutation-types'

// initial state
const state = {
  user: {}
}

// getters
const getters = {
  user: state => state.user
}

// actions
const actions = {
  loginSystem ({ commit }, options) {
    return new Promise((resolve) => {
      api.basicPlatform_login(options).then(reply => {
        commit(types.LOGIN, reply.data)
        resolve(reply)
        console.log('actions login system:' + reply.data)
      }).catch(err => {
        console.log(err)
      })
    })
  },
  logoutSystem ({commit}, options) {
    return new Promise((resolve) => {
      api.basicPlatform_logout().then(reply => {
        console.log('actions logoutSystem')
        resolve(reply)
      }).catch(err => {
        console.log(err)
      })
    })
  },
  updatePassword ({commit}, options) {
    return new Promise((resolve) => {
      api.basicPlatform_updatePwd(options).then(reply => {
        console.log('actions updatePassword')
        resolve(reply)
      }).catch(err => {
        console.log(err)
      })
    })
  }
}

// mutations同步 修改state
const mutations = {
  [types.LOGIN] (state, data) {
    state.user = data.user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
