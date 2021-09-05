import React, { useState } from 'react';

const TodoItem = ({ todo }) => {
  const [completed, setCompleted] = useState(todo.completed);
  return (
    <div className='list-item'>
      <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {todo.text}
      </div>
    </div>
  );
};

export default TodoItem;
