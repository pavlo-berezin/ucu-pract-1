import React from 'react';
import TodoList from '../todoList';
import Sidebar from '../sidebar'

import './dashboard.css'

export default class Dashboard extends React.Component {
  state = {
    selected: 1,
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
            text: 'Todo something',
            isDone: true,
          },
          {
            id: 5,
            text: 'Todo else',
            isDone: false,
          },
        ],
      },
    ],
  };

  render() {
    const selectedList = this.state.todoLists.find(e => e.id === this.state.selected);
    return (
      <main className="dashboard">
        <Sidebar lists={this.state.todoLists}></Sidebar>
        <TodoList list={selectedList}></TodoList>
      </main>
    )
  }
}
