import React from 'react';
import { connect } from '../context';

const SideBar = ({ count, dispatch }) => (
  <div style={{ height: '90vh', width: '150px', boxShadow: '#c5c3c3 2px 3px 12px 1px', position: 'absolute', left: 0 }}>
    <div style={{ paddingTop: '24px' }}>Count: {count}</div>
    <button onClick={() => dispatch({ type: 'reset' })}>Reset count</button>
  </div>
);

export default connect(SideBar);
