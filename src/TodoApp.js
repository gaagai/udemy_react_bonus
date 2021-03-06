import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const InitialTodos = [
  { id: 1, text: 'ללמוד ריאקט', completed: false },
  { id: 2, text: 'לכבוש את העולם', completed: true },
  { id: 3, text: 'לסיים את הקורס', completed: false },
];
const TodoApp = () => {
  const [todos, setTodos] = useState(InitialTodos);

  const addTodo = (todo) => {
    setTodos([...todos, { id: 4, text: todo, completed: false }]);
  };
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;
