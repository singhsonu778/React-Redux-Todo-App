import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '../scss/index.scss';
import reducers from './reducers';
import App from './components/App';

let initialState = {
	"todos":[
		{	"id": 0,
			"text": "initial todo",
			"completed": false
		}
	]
};

const store = createStore(reducers, initialState);
console.log('store...' + JSON.stringify(store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);