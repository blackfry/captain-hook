import React, { createContext, useReducer } from 'react';

const initialState = { count: 0, dispatch: a => a };
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

export const GlobalStateProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);

  const store = { ...count, dispatch };

  return <CountContext.Provider value={store}>{children}</CountContext.Provider>;
};

export const connect = BaseComponent => {
  function WithStore(props) {
    return (
      <CountContext.Consumer>
        {value => {
          return <BaseComponent {...props} {...value} />;
        }}
      </CountContext.Consumer>
    );
  }

  const wrappedComponentName = BaseComponent.displayName || BaseComponent.name || 'Component';
  WithStore.displayName = `Connected(${wrappedComponentName})`;

  return WithStore;
};
