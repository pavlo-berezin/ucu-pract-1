import React from 'react';

import './todoList.css';

import TodoItem from '../todoItem';

export default class TodoList extends React.Component {
  toggleIsDone(id) {
    const { list, updateList } = this.props;

    let update = {
      todos: list.todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)),
    };

    updateList(list.id, update);
  }

  render() {
    const { list } = this.props;

    return (
      <div className='todo-list-container'>
        <div className='todo-list-header'>{list.name}</div>
        {list.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleIsDone={(id) => this.toggleIsDone(id)} />
        ))}
      </div>
    );
  }
}
