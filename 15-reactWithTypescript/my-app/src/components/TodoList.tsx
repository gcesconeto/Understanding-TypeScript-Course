import React from "react";

import './TodoList.css'

import { Todo } from '../todo.model';

type TodoListProps = {
  todos: Todo[];
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  // const deleteHandler = (id: string) => {
  //   props.deleteTodo(id);
  // }
  return <ul>
    {props.todos.map((todo) => (
      <li key={todo.id}>
        <span>
          {todo.text}
          <button onClick={props.deleteTodo.bind(null, todo.id)}>Delete</button>
        </span>
      </li>
    ))}
  </ul>
}

export default TodoList;