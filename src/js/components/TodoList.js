import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
   render() {
      return (
		  <ul>
		    {
				this.props.todos.map(todo =>
					<Todo key={todo.id} text={todo.text} completed={todo.completed} onClick={() => this.props.onTodoClick(todo.id)}/>
				)
		    }
		  </ul>
      );
   }
}

export default TodoList;