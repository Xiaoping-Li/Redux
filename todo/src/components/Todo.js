 import React, { Component } from 'react';
 import { connect } from 'react-redux';

 import { toggleComplete, deleteTodo } from '../actions';

 class Todo extends Component {
 	toggleComplete() {
 		this.props.toggleComplete(this.props.index);
 	}

 	deleteTodo() {
 		this.props.deleteTodo(this.props.index);
 	}

 	render() {
 		return (
 			<li>
 				<input
 					type="checkbox"
 					onChange={this.toggleComplete.bind(this)}
 				/>
 				{this.props.todo.value}
 				<button onClick={this.deleteTodo.bind(this)}>
 					X
 				</button>
 			</li>
 		);
 	}
 }

 export default connect(null, { toggleComplete })(Todo);