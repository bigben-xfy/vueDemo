/**
 * Created by bigben on 2017/5/4.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'
import './config/rem'
import FastClick from 'fastclick'

import 'element-ui/lib/theme-default/index.css'
import './style'

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

Vue.use(ElementUI)

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})
sync(store, router)

new Vue({
	router,
	store,
}).$mount('#app')










