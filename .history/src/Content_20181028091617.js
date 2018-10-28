import React from 'react';
import { connect } from './context';

const Hook = ({ count, dispatch }) => {
  console.log('hook', { count, dispatch });
  return (
    <div
      style={{
        position: 'absolute',
        left: '29%',
        paddingLeft: '150px'
      }}
    >
      <p>You clicked {count} times</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Click me</button>
    </div>
  );
};

export default connect(Hook);
