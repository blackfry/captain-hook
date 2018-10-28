import React from 'react';
import { connect } from '../globalState';

const Header = ({ authenticated }) => (
  <header className="App-header">
    <div style={{ color: 'white' }}>
      <h1>{authenticated ? 'You are logged in' : 'You are logged out'}</h1>
    </div>
  </header>
);

export default connect(Header);
