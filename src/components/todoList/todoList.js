import React from 'react';

import './todoList.css';

import TodoItem from '../todoItem';
import AddTodo from '../addTodo';
import { connect } from 'react-redux';
import { getTodoListById } from '../../selectors';
import { updateTodoList } from '../../actions';

function NewTodoList({ list, updateTodoList  }) {
  const toggleIsDone = (id) => {
    let update = {
      todos: list.todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)),
    };

    updateTodoList(list.id, { ...list, ...update });
  }

  const addNewTodo = (text) => {
    let update = {
      todos: [...list.todos, { id: new Date().getTime(), text, isDone: false }]
    }

    updateTodoList(list.id, { ...list, ...update });
  }

  return (
    <div className='todo-list-container'>
      <div className='todo-list-header'>{list.name}</div>
      {list.todos && list.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleIsDone={toggleIsDone} />
      ))}
      <AddTodo onAdd={addNewTodo}></AddTodo>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  list: getTodoListById(props.match.params.id, state) || {}
});
const mapDispatchToProps = (dispatch) => ({
  updateTodoList: (id, todoList) => dispatch(updateTodoList(id, todoList))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoList)
