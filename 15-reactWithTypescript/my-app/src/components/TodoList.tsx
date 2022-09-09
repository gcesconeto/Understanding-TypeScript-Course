import React from "react";

type TodoProps = {
  todos: { id: string; text: string }[];
}

const TodoList: React.FC<TodoProps> = (props) => {
  return <ul>
    {props.todos.map((todo) => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
}

export default TodoList;