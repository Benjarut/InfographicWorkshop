import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var findDom = ReactDOM.findDOMNode;
import $ from 'jquery';
import {browserHistory} from 'react-router';
import Cookies from 'js-cookie';

const Login = React.createClass({
	getInitialState(){
		return{
			state: ''
		}
	},

	componentDidMount(){

	},

	formLogin(e){
		e.preventDefault()

		let user = {
			username:findDom(this.refs.username).value,
			password:findDom(this.refs.password).value
		}

		$.ajax({
			url:'http://192.168.10.39:4000/auth',
			type:'post',
			data: JSON.stringify(user),
			contentType: 'application/json; charset=utf-8',
			dataType:'json',
			success:(data)=>{
				console.log('success', data);

				Cookies.set('token', data.token)
				Cookies.set('username',data.username)
				browserHistory.push('/');
			},
			error: (xhr) =>{
				console.log('err', xhr.responseJSON.error)
			}
		})
	},

	render(){
		return (
			<div>
				<form onSubmit={this.formLogin}>
					<label htmlFor="username">Username</label>
					<input type="text" ref="username" name="username"/><br/>

					<label>Password</label>
					<input type="password" ref="password"/>

					<button type="submit">Login</button>
				</form>	
			</div>
		)
	}
})

export default Login

