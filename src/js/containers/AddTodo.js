import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {

   handleFormSubmit(event) {
	  console.log('AddTodo...form submit...');
	  event.preventDefault();
	  let input  = this.refs.todo;
	  if (!input.value.trim()) {
	     return;
	  }
	  this.props.dispatch(addTodo(input.value));
	  input.value = '';
   }

   render() {
      return (
	       <div>
	          <form onSubmit = {this.handleFormSubmit.bind(this)}>
	          	  <input type = 'text' ref = 'todo'/>
		          <button type = 'submit'>Add Todo</button>
	          </form>
	       </div>
      );
   }
}

export default connect()(AddTodo);