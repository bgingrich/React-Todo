import React from 'react';
import "./Todo.css";

const TodoForm = props => {
  return (
    <container className = "formContainer">
    <form className = "form">
      <input className = "input"
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="New Task"
      />
      <button onClick={props.handleAddTodo}>Add Todo</button>
      <button onClick={props.handleClearTodos}>Clear Completed</button>
    </form>
    </container>
  );
};

export default TodoForm; 