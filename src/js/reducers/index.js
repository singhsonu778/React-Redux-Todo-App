import { combineReducers } from 'redux';
import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';

const reducers = combineReducers({ todos, visibilityFilter });

export default reducers;