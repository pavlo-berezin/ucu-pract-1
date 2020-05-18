import React from 'react';
import TodoList from '../todoList';
import Sidebar from '../sidebar';

import './dashboard.css';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTodos } from '../../actions';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <main className='dashboard'>
        <Sidebar></Sidebar>
        <Route path='/list/:id' component={TodoList}></Route>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
});

export default connect(null, mapDispatchToProps)(Dashboard)