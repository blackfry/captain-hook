import React from 'react';
import { Content, SideBar } from './components';
import './App.css';

const App = props => {
  return (
    <div className="App">
      <header className="App-header" />
      <div>
        <SideBar />
        <div style={{ padding: '50px' }}>
          <Content />
        </div>
      </div>
    </div>
  );
};

export default App;
