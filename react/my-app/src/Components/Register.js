import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router'
import $ from 'jquery';
var findDom = ReactDOM.findDOMNode

const Register = React.createClass({
	getInitialState(){
		return{
			state: ''
		}
	},

	componentDidMount(){

	},
	formRegis(e){
		e.preventDefault()

		let user = {
			username: findDom(this.refs.username).value,
			password: findDom(this.refs.password).value,
			nickname: findDom(this.refs.nickname).value,
		}
		console.log(user)
	
	$.ajax({
		url:'http://192.168.10.39:4000/users',
		type:'post',
		data: JSON.stringify(user),
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success:(data)=>{
			console.log('success',data);
			browserHistory.push('/login');
		},
		error: (xhr) => {
			console.log('err', xhr.responseJSON.error)
		}
	})
	}
	,
	render(){
		return (
			<div>
				<form onSubmit={this.formRegis}>
					<label htmlFor="username">Username</label>
					<input type="text" ref="username" name="username"/><br/>

					<label htmlFor="nickname">Nickname</label>
					<input type="text" ref="nickname" name="nickname"/><br/>

					<label>Password</label>
					<input type="password"  ref="password"/>
					<button type="submit">Register</button>
				</form>	
			</div>
		)
	}
})

export default Register;