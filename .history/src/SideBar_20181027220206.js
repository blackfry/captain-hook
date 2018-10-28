import React, { useState, useContext } from 'react';
import { CountContext, CountProvider } from './context';
import Router from './router';
const { Link } = Router;

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
      <a href={item.path}>{item.name}</a>
    </div>
  ));
};

const SideBar = props => {
  return (
    <div
      style={{ height: '90vh', width: '150px', boxShadow: '#c5c3c3 2px 3px 12px 1px', position: 'absolute', left: 0 }}
    >
      <div style={{ padding: '200px 10px' }}>{SideBarItems()}</div>
      <div>Count: {props.count}</div>
    </div>
  );
};

const ExportSideBar = () => (
  <CountProvider>
    <CountContext.Consumer>{val => <SideBar {...val} />}</CountContext.Consumer>
  </CountProvider>
);

export default ExportSideBar;
