import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Route from './routes'
import {Router, browserHistory} from 'react-router'

ReactDom.render(
	<Router routes={Route} history={browserHistory}/>, 
	document.getElementById('root')
);