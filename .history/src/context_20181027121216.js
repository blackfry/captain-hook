import { createContext } from 'react';

export const defaultValue = {
  count: 0
};

export const CountContext = createContext(defaultValue);
