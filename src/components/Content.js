import React from 'react';
import { connect } from '../globalState';
import { Login, Logout } from '.';

const Content = ({ count, dispatch }) => (
  <div
    style={{
      position: 'absolute',
      left: '29%',
      paddingLeft: '150px'
    }}
  >
    <p>You clicked {count} times</p>
    <button onClick={() => dispatch({ type: 'increment' })}>Count +</button>
    <button style={{ marginLeft: '24px' }} onClick={() => dispatch({ type: 'decrement' })}>
      Count -
    </button>
    <div style={{ paddingTop: '150px' }}>
      <Login />
    </div>
    <div style={{ paddingTop: '150px' }}>
      <Logout />
    </div>
  </div>
);

export default connect(Content);
