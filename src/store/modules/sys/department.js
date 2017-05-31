/**
 * Created by  on 2017/5/25.
 *  @author liqiuling
 */

import api from '../../../service'
import * as types from '../../mutation-types'

// initial state
const state = {
    departmentTreeData:[]
}

// getters
const getters = {
    departmentTree: state => state.departmentTreeData
}

// actions
const actions = {
    // getAllUnits({commit}, index) {
    //   shop.getUnits(units => {
    //     commit(types.RECEIVE_UNITS, { units })
    //   })
    // },
    getDepartmentTree({ commit }) {
        api.dep_getDepartmentTree().then(reply => {
            commit(types.SET_DEPARTMENT_DATA, reply.data);
        })
    }
}

// mutations
const mutations = {
    [types.SET_DEPARTMENT_DATA](state, data) {
        state.departmentTreeData = data.departmentTreeData
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}