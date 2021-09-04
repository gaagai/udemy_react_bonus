import React from 'react';
import useInputHook from './Hooks/UseInputHook';

const TodoForm = () => {
  const [value, handleChange, resetValue] = useInputHook('');

  const handleSubmit = (event) => {
    event.preventDefault();
    resetValue();
  };

  return (
    <div className='info'>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} type='text' autoFocus />
      </form>
    </div>
  );
};

export default TodoForm;
