import React, { useState, useRef } from 'react';

export default function AddTodo(props) {
  const [todo, setTodo] = useState('');
  const todoRef = useRef(null);

  const handleChange = (event) => {
    setTodo(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onAdd(todo);

    setTodo('');
    todoRef.current.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={todoRef} placeholder="Add todo" value={todo} onChange={handleChange}></input>
      <input type="submit" value="+"></input>
    </form>
  )
}