import React, { Component } from 'react';
import Hook from './hook';
import SideBar from './SideBar';
import logo from './logo.svg';
import './App.css';
import { CountContext, CountProvider } from './context';

const App = props => {
  console.log('asd', { props });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <SideBar {...props} />
        <div style={{ padding: '50px' }}>
          <Hook {...props} />
        </div>
      </div>
    </div>
  );
};

const ContextApp = () => {
  return (
    <CountProvider>
      <CountContext.Consumer>{val => <App {...val} />}</CountContext.Consumer>
    </CountProvider>
  );
};

export default ContextApp;
