import React from 'react';
import { CountContext, CountProvider } from './context';

const Hook = ({ count, dispatch }) => {
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

const ExportHook = () => {
  <CountProvider>
    <CountContext.Consumer>{val => <Hook {...val} />}</CountContext.Consumer>
  </CountProvider>;
};

export default ExportHook;