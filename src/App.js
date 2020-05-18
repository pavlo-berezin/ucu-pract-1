import React from 'react';
import Dashboard from './components/dashboard';
import Header from './components/header';
import About from './components/about';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import configStore from './store';

const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
