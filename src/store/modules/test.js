/**
 * Created by bigben on 2017/5/8.
 */


import * as types from '../mutation-types'
import _ from 'lodash'

const state = {
	testList: []
}

const getters = {
	testList: state => state.testList
}

const actions = {
	setTestData({commit}, data) {
		commit(types.SET_TEST_DATA, data)
	},
	
	deleteTestData({commit}, id) {
		commit(types.DELETE_TEST_DATA, id)
	},
}

const mutations = {
	[types.SET_TEST_DATA](state, payload) {
		state.testList.push(payload);
	},
	
	[types.DELETE_TEST_DATA](state, payload) {
		_.forEach(payload.sort().reverse(), id => {
			state.testList.splice(id, 1)
		})
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}












