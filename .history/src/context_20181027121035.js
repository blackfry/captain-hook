import { createContext } from 'react';

export const themes = {
  count: 0
};

export const countContext = createContext(
  themes.dark // default value
);
