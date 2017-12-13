import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'; //Why import from actions folder??? The real "addTodo" function is in "reducers" folder

class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoValue: ""
		};

		this.handleNewTodoInput = this.handleNewTodoInput.bind(this);
		this.addTodo = this.addTodo.bind(this);
	}

	handleNewTodoInput(event) {
		this.setState({
			todoValue: event.target.value
		});
	}

	addTodo(event) {
		event.preventDefault();
		this.props.addTodo({
			value: this.state.todoValue,
			completed: false
		});
		this.setState({
			todoValue: ""
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.addTodo}>
					<input
						onChange={this.handleNewTodoInput}
						placeholder="Please enter new todos here..."
						value={this.state.todoValue}
					/>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	}
}

export default connect(mapStateToProps, { addTodo })(TodoForm);
