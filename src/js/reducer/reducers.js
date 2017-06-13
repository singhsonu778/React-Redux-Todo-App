import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';

const reducers = (state = {}, action) => {
   return {
      todos: todos(state.todos, action),
      visibilityFilter: visibilityFilter(state.visibilityFilter, action)
   };
};

export default reducers;