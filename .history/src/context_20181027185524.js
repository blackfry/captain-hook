import React, { createContext, useReducer, useState } from 'react';

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
const [state, dispatch] = useReducer(reducer, initialState);

const CountProvider = () => {
  const [count, setCount] = useState(0);

  return <ThemeContext.Provider value={this.state.theme}>{this.props.children}</ThemeContext.Provider>;
};
