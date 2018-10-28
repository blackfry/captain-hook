import React from 'react';
import { connect } from '../globalState';

const Content = ({ count, dispatch }) => {
  return (
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
    </div>
  );
};

// export default connect(Content);
export default Content;
