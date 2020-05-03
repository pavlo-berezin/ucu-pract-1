import React from 'react';

import './sidebar.css'

const Sidebar = (props) => (
  <aside class='sidebar'>
    <div class='sidebar-title'>Lists</div>

    {props.lists.map((list) => (
      <div className='sidebar-item'>{list.name}</div>
    ))}
  </aside>
);

export default Sidebar;
