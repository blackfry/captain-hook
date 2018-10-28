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

export const CountProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);

  const actions = { ...count, dispatch };

  return <CountContext.Provider value={actions}>{children}</CountContext.Provider>;
};

export const connect = BaseComponent => {
  function WithStore(props) {
    return <CountContext.Consumer>{val => <BaseComponent {...props} blah={val} />}</CountContext.Consumer>;
  }

  const wrappedComponentName = BaseComponent.displayName || BaseComponent.name || 'Component';
  WithStore.displayName = `Connected(${wrappedComponentName})`;

  return WithStore;
};

// export const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
