import React from "react";

import { Todo } from '../todo.model';

type TodoListProps = {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return <ul>
    {props.todos.map((todo) => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
}

export default TodoList;