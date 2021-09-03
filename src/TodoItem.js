import React from 'react';

const TodoItem = ({ todo }) => {
  return <div className='list-item'>{todo.text}</div>;
};

export default TodoItem;
