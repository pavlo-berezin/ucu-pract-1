import React from 'react';

const TodoItem = ({ todo, toggleIsDone }) => (
  <div className='todo-list-item'>
    <button className='todo-list-item-status' onClick={() => toggleIsDone(todo.id)}>
      {todo.isDone ? '✔️' : '❌'}
    </button>
    <span className='todo-list-item-text'>{todo.text}!</span>
  </div>
);

export default TodoItem;
