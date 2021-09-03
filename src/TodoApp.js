import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const todos = [
  { id: 1, text: 'ללמוד ריאקט', completed: false },
  { id: 2, text: 'לכבוש את העולם', completed: true },
  { id: 3, text: 'לסיים את הקורס', completed: false },
];
const TodoApp = () => {
  return (
    <div>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;
