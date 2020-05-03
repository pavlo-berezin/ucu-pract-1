import React from 'react';

import './todoList.css';

import TodoItem from '../todoItem';

export default class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Go shopping 🛒',
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
        <div className="todo-list-header">{this.state.name}</div>
        {this.state.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleIsDone={(id) => this.toggleIsDone(id)}/>
        ))}
      </div>
    );
  }
}
