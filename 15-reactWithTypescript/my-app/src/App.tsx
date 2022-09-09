import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App: React.FunctionComponent = () => {
  const todos = [{id: 't1', text: 'Clean the apartment'}];
  return (
    <div className="App">
      <TodoForm />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
