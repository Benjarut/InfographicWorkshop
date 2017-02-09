import React from 'react'
import {Route, IndexRoute } from 'react-router'
import Home from './Components/Home'
import App from './Components/App'
import Login from './Components/login'
import Register from './Components/Register'
import Cookies from 'js-cookie'

function checkAuth(nextState, replace, cb){
	if(!Cookies.get('token')){
		replace({
			pathname: '/login',
			state: {nextPathname: nextState.location.pathname}
		})
	}
	cb()
}

function logOut(nextState, replace, cb){
	Cookies.remove('token')
	Cookies.remove('username')

	replace({
		pathname: '/login'
	})

	cb()
}

module.exports = (
	<Route path= "/" component={App}>
		<IndexRoute component= {Home} onEnter={checkAuth}/>
		<Route path="Login" component={Login}/>
		<Route path="Register" component={Register}/>
		<Route path="logout" onEnter={logOut} />
	</Route>
)