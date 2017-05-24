/**
 * Created by bigben on 2017/5/4.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import test from './modules/test'

Vue.use(Vuex)

let state = {

}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters,
	modules: {
		test
	}
})









