/**
 * Created by bigben on 2017/5/4.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import './config/rem'
import FastClick from 'fastclick'
import 'font-awesome/css/font-awesome.css'
import 'mo-js'

import './style'

import {
	menu,
	submenu,
	menuItem,
	menuItemGroup,
	loading
} from 'element-ui'

Vue.use(menu)
Vue.use(submenu)
Vue.use(menuItem)
Vue.use(menuItemGroup)

Vue.use(loading.directive)
Vue.prototype.$loading = loading.service

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body)
	}, false);
}

//Vue.use(ElementUI)

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})
sync(store, router)

new Vue({
	router,
	store,
}).$mount('#app')










