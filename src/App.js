import React from 'react';
import { Content, SideBar, Header } from './components';
import './App.css';

const App = props => {
  return (
    <div className="App">
      <Header />
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
