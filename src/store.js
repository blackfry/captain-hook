import React, { Fragment, useReducer } from 'react';

const initialState = { count: 0 };

const CountContext = React.createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state.count;
  }
}

const Counter = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Fragment>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </Fragment>
  );
};
