import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import '../scss/index.scss';
import reducers from './reducer/reducers.js';

const store = createStore(reducers);

ReactDOM.render(
	<h1>React Redux ToDo App</h1>,
	document.getElementById('root')
);