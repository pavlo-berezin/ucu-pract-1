import React from 'react';
import Dashboard from './components/dashboard';
import Header from './components/header';
import About from './components/about';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
