import { createContext, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
  }
}
const [state, dispatch] = useReducer(reducer, initialState);

export const defaultValue = {
  count: 0
};

export const CountContext = createContext(defaultValue);
