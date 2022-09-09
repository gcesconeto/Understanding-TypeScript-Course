import React, { useState } from 'react';

import { Todo } from './todo.model';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: string) => {
    setTodos((oldTodos) => [...oldTodos, {id: Math.random().toString(), text: todo}]);
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
