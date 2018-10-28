import React, { Component } from 'react';
import Hook from './hook';
import SideBar from './SideBar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  console.log(window)
  render() {
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
  }
}

export default App;
