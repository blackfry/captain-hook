import React, { Component } from 'react';
import Hook from './hook';
import SideBar from './SideBar';
import logo from './logo.svg';
import './App.css';
import { CountContext, CountProvider } from './context';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <SideBar />
        <div style={{ padding: '50px' }}>
          <Hook />
        </div>
      </div>
    </div>
  );
};

const ContextApp = () => {
  return (
    <CountContext>
      <CountContext.Consumer>{val => <App>{val}</App>}</CountContext.Consumer>
    </CountContext>
  );
};

export default ContextApp;
