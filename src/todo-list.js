import React from 'react';

import './todo-list.css';

import TodoItem from './todo-item';

export default class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          id: 1,
          text: 'Todo something',
          isDone: true,
        },
        {
          id: 2,
          text: 'Todo else',
          isDone: false,
        },
      ],
    };
  }

  toggleIsDone(id) {
    this.setState((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)),
    }));
  }

  render() {
    return (
      <div className="todo-list-container">
        <div className="todo-list-header">Your todos</div>
        {this.state.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleIsDone={(id) => this.toggleIsDone(id)}/>
        ))}
      </div>
    );
  }
}
