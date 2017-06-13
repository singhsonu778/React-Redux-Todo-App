import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '../scss/index.scss';
import reducers from './reducers';
import TodoApp from './components/TodoApp.js';

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<TodoApp/>
	</Provider>,
	document.getElementById('root')
);