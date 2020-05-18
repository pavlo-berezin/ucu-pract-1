import React from 'react';

import './todoList.css';

import TodoItem from '../todoItem';
import AddTodo from '../addTodo';
import { connect } from 'react-redux';
import { getTodoListById } from '../../selectors';
import { updateTodoList } from '../../actions';


class TodoList extends React.Component {
  toggleIsDone(id) {
    const { list } = this.props;

    let update = {
      todos: list.todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)),
    };

    this.props.updateTodoList(list.id, { ...list, ...update });
  }

  addNewTodo(text) {
    const { list } = this.props;

    let update = {
      todos: [...list.todos, { id: new Date().getTime(), text, isDone: false }]
    }

    this.props.updateTodoList(list.id, { ...list, ...update });
  }

  render() {
    const { list } = this.props;

    return (
      <div className='todo-list-container'>
        <div className='todo-list-header'>{list.name}</div>
        {list.todos && list.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleIsDone={(id) => this.toggleIsDone(id)} />
        ))}
        <AddTodo onAdd={(e) => this.addNewTodo(e)}></AddTodo>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  list: getTodoListById(props.match.params.id, state) || {}
});
const mapDispatchToProps = (dispatch) => ({
  updateTodoList: (id, todoList) => dispatch(updateTodoList(id, todoList))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
