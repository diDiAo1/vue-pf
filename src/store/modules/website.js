/**
 * Created by  on 2017/5/18.
 *  @author liqiuling
 */

import api from '../../service'
import * as types from '../mutation-types'

// initial state
const state = {
  pagesCount: 0,
  websiteList: []
}

// getters
const getters = {
  pagesCount: state => state.pagesCount,
  allWebsites: state => state.websiteList
}

// actions
const actions = {
  // getAllUnits({commit}, index) {
  //   shop.getUnits(units => {
  //     commit(types.RECEIVE_UNITS, { units })
  //   })
  // },
  searchParamList ({ commit }, options) {
    console.log('searchParamList:' + options)
    api.website_getSearchWebsiteList(options).then(reply => {
      commit(types.WS_SET_SEARCH_LIST, reply.data)
    })
  },
  delWeb ({ commit }, id) {
    console.log('delWeb:' + id)
    api.website_delWebsiteById(id)
  },
  addWeb ({ commit }, options) {
    api.website_addWeb(options).then(reply => {
      commit(types.WS_SET_ADD_WEBSITE, reply.data)
    })
  }
}

// mutations
const mutations = {
  [types.WS_SET_SEARCH_LIST] (state, data) {
    state.websiteList = data.websiteList
    state.pagesCount = parseInt(data.total)
  },
  [types.WS_SET_ADD_WEBSITE] (state, data) {
    state.websiteList.push(data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
