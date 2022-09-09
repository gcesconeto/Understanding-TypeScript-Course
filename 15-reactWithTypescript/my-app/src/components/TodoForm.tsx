import React, { useRef } from "react";

type TodoFormProps = {
  addTodo: (todo: string) => void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const textInput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const userInput = textInput.current!.value;
    props.addTodo(userInput);
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