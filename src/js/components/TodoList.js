import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {

   handleClick(todo) {
		console.log('Todolist...handleClick method...');
		this.props.onClickHandler(todo.id);
   }

   render() {
      return (
		  <ul>
		    {
				this.props.todos.map(todo =>
					<Todo key={todo.id} text={todo.text} completed={todo.completed} onClickHandler={this.handleClick.bind(this, todo)}/>
				)
		    }
		  </ul>
      );
   }
}

export default TodoList;