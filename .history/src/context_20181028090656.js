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

export const CountProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);

  const actions = { ...count, dispatch };

  return <CountContext.Provider value={actions}>{children}</CountContext.Provider>;
};

export const connect = BaseComponent => {
  function WithStore(props) {
    return (
      <CountProvider>
        <CountContext.Consumer>
          {value => {
            console.log({ value });
            return <BaseComponent {...props} {...value} />;
          }}
        </CountContext.Consumer>
      </CountProvider>
    );
  }

  const wrappedComponentName = BaseComponent.displayName || BaseComponent.name || 'Component';
  WithStore.displayName = `Connected(${wrappedComponentName})`;

  return WithStore;
};
