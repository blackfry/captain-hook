import { createContext, useReducer, useState } from 'react';
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

export const defaultValue = {
  count: 0
};

export const CountContext = createContext(defaultValue);

const CountProvider = () => {
  const [count, setCount] = useState(0);

  return <ThemeContext.Provider value={this.state.theme}>{this.props.children}</ThemeContext.Provider>;
};
