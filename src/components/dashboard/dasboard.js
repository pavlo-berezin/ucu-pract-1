import React from 'react';
import TodoList from '../todoList';
import Sidebar from '../sidebar';

import './dashboard.css';

export default class Dashboard extends React.Component {
  state = {
    selected: 2,
    todoLists: [
      {
        name: 'Go shopping 🛒',
        id: 1,
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
      },
      {
        name: 'Home stuff 🏠',
        id: 2,
        todos: [
          {
            id: 4,
            text: 'Todo house something',
            isDone: true,
          },
          {
            id: 5,
            text: 'Todo house else',
            isDone: false,
          },
        ],
      },
    ],
  };

  updateList(listId, update) {
    this.setState((state) => ({
      todoLists: state.todoLists.map((list) => (list.id === listId ? { ...list, ...update } : list)),
    }));
  }

  render() {
    const selectedList = this.state.todoLists.find((e) => e.id === this.state.selected);
    return (
      <main className='dashboard'>
        <Sidebar lists={this.state.todoLists}></Sidebar>
        <TodoList list={selectedList} updateList={(l, u) => this.updateList(l, u)}></TodoList>
      </main>
    );
  }
}
