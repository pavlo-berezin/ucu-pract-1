import React from 'react';
import './header.css';

const Header = () => (
  <div className='header-container'>
    <header className='header'>
      <section className='header-title'>
        <span>todotodo</span>
        <span role='img' aria-label='dart'>
          🎯
        </span>
      </section>
    </header>
  </div>
);

export default Header;
