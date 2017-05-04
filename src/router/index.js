/**
 * Created by bigben on 2017/5/4.
 */

import App from '../App'

const home = r => require(['../page/home'], r)

export default [{
	path: '/',
	component: App, //顶层路由，对应index.html
	children: [
		{
			path: '',
			redirect: '/home'
		}, {
			path: '/home',
			component: home
		}
	]
}]
















