import React, { useState } from 'react';

const itemData = [
  {
    name: 'Home',
    path: '/',
    component: <div>This is the Home page</div>
  }
];

const SideBarItems = () => {
  return itemData.map(item => (
    <div key={item.name} style={{ color: 'white' }}>
      <a href={item.path}>{item.Name}</a>
    </div>
  ));
};

const SideBar = () => {
  return (
    <div style={{ minHeight: '100vh', width: '150px', background: 'navy' }}>
      <div style={{ padding: '50px 10px' }}>{SideBarItems()}</div>
    </div>
  );
};

export default SideBar;
