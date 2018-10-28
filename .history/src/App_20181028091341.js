import React from 'react';
import { GlobalStateProvider } from './context';
import Hook from './hook';
import SideBar from './SideBar';
import logo from './logo.svg';
import './App.css';

const App = props => {
  console.log('asd', { props });
  return (
    <GlobalStateProvider>
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
    </GlobalStateProvider>
  );
};

export default App;
