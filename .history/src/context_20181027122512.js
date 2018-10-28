import { createContext, useReducer } from 'react';
const [state, dispatch] = useReducer(reducer, initialState);

export const defaultValue = {
  count: 0
};

export const CountContext = createContext(defaultValue);
