import React, { createContext, useReducer } from 'react';

const initialState = { count: 0 };
export const CountContext = createContext(initialState);

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

const CountProvider = props => {
  const [count, dispatch] = useReducer(reducer, initialState);

  const actions = { count, dispatch };

  return <CountContext.Provider value={actions}>{props.children}</CountContext.Provider>;
};

export default CountProvider;
