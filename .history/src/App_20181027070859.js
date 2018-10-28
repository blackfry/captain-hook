import React, { Component } from 'react';
import Hook from './hook';
import SideBar from './SideBar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div style={{ display: 'block' }}>
          <SideBar style={{ display: 'inline-block' }} />
          <div style={{ padding: '50px', display: 'inline-block' }}>
            <Hook />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
