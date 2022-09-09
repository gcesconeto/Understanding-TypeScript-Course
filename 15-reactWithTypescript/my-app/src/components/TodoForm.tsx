import React, { useRef } from "react";

import './TodoForm.css';

type TodoFormProps = {
  addTodo: (todo: string) => void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const textInput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const userInput = textInput.current!.value;
    props.addTodo(userInput);
    textInput.current!.value = '';
  };

  return <form onSubmit={submitHandler}>
    <div className="form-control">
      <label htmlFor="todo-text">Todo Text</label>
      <input type="text" id="todo-text" ref={textInput}></input>
    </div>
    <button type="submit">Add todo</button>
  </form>
}

export default TodoForm;