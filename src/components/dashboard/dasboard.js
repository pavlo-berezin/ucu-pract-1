import React, { useEffect, useState } from 'react';
import TodoList from '../todoList';
import Sidebar from '../sidebar';

import './dashboard.css';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTodos } from '../../actions';

function Dashboard(props) {
  useEffect(() => {
    props.fetchTodos();
  }, []);

  return (
    <main className='dashboard'>
      <Sidebar></Sidebar>
      <Route path='/list/:id' component={TodoList}></Route>
    </main>
  );
}


const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
});

export default connect(null, mapDispatchToProps)(Dashboard)