import { NEW_TODO, TOGGLE_COMPLETE, DELETE_TODO } from '../actions';

export default (todos = [], action) => {
  switch (action.type) {
  	case NEW_TODO:
  	  return todos.concat(action.payload);
  	case TOGGLE_COMPLETE:
      const newTodos = todos.slice(0); //copy todos
      newTodos[action.payload].completed = !newTodos[action.payload].completed; //undo todo.completed
      return newTodos;
    case DELETE_TODO:
      const deleteTodos = todos.slice(0);
      deleteTodos.splice(action.payload, 1);
      return deleteTodos; 
    default:
      return todos;
  }
}
