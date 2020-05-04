import React from 'react';
import './header.css';

import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className='header-container'>
    <header className='header'>
      <section className='header-title'>
        <span>todotodo</span>
        <span role='img' aria-label='dart'>
          🎯
        </span>
      </section>
      <nav>
        <NavLink exact to="/" activeClassName="selected">Dashboard</NavLink>
        <NavLink to="/about" activeClassName="selected">About</NavLink>
      </nav>
    </header>
  </div>
);

export default Header;
