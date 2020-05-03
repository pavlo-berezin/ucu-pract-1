import React from 'react';
import './todoItem.css';

const TodoItem = ({ todo, toggleIsDone }) => (
  <div className='todo-list-item' onClick={() => toggleIsDone(todo.id)}>
    {todo.isDone ? (
      <span role='img' aria-label='check'>
        ✔️
      </span>
    ) : (
      <span role='img' aria-label='cross'>
        ❌
      </span>
    )}
    <span className='todo-list-item-text'>{todo.text}!</span>
  </div>
);

export default TodoItem;
