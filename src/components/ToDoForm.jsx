import React from 'react';

const ToDoForm = ({handleClick}) => {
  const [todo, setTodo] = React.useState('');
  
  return (
    <div className='todo-form'>
      <p>~ Today I need to ~</p>
      <span>
        <input value={todo} onChange={
          (event) => setTodo(event.target.value)
        }/>
        <button onClick={() => { handleClick(todo); setTodo('') }}>Submit</button>
      </span>
    </div>
  );
};

export default ToDoForm;
