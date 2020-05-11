import React from 'react';
import TodoList from '../todoList';
import Sidebar from '../sidebar';

import './dashboard.css';

import { Route } from 'react-router-dom';

export default class Dashboard extends React.Component {
  state = {
    todoLists: [],
  };

  componentDidMount() {
    fetch('/todoLists').then(resp => {
      return resp.json();
    }).then(body => {
      console.log(body);
      this.setState({
        todoLists: body
      })
    })
  }

  updateList(listId, update) {
    const list = this.state.todoLists.find(list => list.id === listId);
    const updatedList = { ...list, ...update };

    fetch(`/todoLists/${listId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedList),
    })
    .then(e => e.json())
    .then(savedList => {
      this.setState((state) => ({
        todoLists: state.todoLists.map((list) => (list.id === savedList.id ? savedList : list)),
      }));
    })

    this.setState((state) => ({
      todoLists: state.todoLists.map((list) => (list.id === listId ? { ...list, ...update } : list)),
    }));
  }

  getListById(listId) {
    return this.state.todoLists.find((list) => list.id == listId) || {};
  }

  addTodo(name) {
    const newTodo = { name, todos: [] };

    fetch(`/todoLists`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo),
    })
    .then((e) => e.json())
    .then(savedList => {
      this.setState(state => ({
        todoLists: [...state.todoLists, savedList]
      }))
    })
  }

  render() {
    return (
      <main className='dashboard'>
        <Sidebar lists={this.state.todoLists} onAdd={(n) => this.addTodo(n)}></Sidebar>
        <Route
          path='/list/:id'
          render={(props) => (
            <TodoList list={this.getListById(props.match.params.id)} updateList={(l, u) => this.updateList(l, u)} />
          )}
        ></Route>
      </main>
    );
  }
}
