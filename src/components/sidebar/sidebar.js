import React from 'react';

import './sidebar.css';

const Sidebar = (props) => (
  <aside className='sidebar'>
    <div className='sidebar-title'>Lists</div>

    {props.lists.map((list) => (
      <div className='sidebar-item' key={list.id}>
        {list.name}
      </div>
    ))}
  </aside>
);

export default Sidebar;
