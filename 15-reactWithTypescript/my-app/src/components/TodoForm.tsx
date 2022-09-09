import React, { useRef } from "react";

const TodoForm: React.FC = () => {
  const textInput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const userInput = textInput.current!.value;
    console.log(userInput);
  };

  return <form onSubmit={submitHandler}>
    <div>
      <label htmlFor="todo-text">Todo Text</label>
      <input type="text" id="todo-text" ref={textInput}></input>
    </div>
    <button type="submit">Add todo</button>
  </form>
}

export default TodoForm;