import React from 'react';
import { connect } from '../context';

const SideBar = props => (
  <div style={{ height: '90vh', width: '150px', boxShadow: '#c5c3c3 2px 3px 12px 1px', position: 'absolute', left: 0 }}>
    <div>Count: {props.count}</div>
  </div>
);

export default connect(SideBar);
