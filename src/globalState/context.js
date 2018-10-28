import React, { createContext, useReducer } from 'react';
import reduceReducers from './reduceReducers';

const initialState = {
  count: 0,
  dispatch: a => a,
  authenticated: false
};
export const CountContext = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return {
        ...state,
        count: 0
      };
    case 'increment':
      return {
        ...state,
        count: state.count + 1
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - 1
      };
    case 'login':
      return {
        ...state,
        authenticated: true
      };
    case 'logout':
      return {
        ...state,
        authenticated: false
      };
    default:
      return state;
  }
}

function authReducer(state, action) {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        authenticated: true
      };
    case 'logout':
      return {
        ...state,
        authenticated: false
      };
    default:
      return state;
  }
}

const reducedReducers = reduceReducers(reducer, authReducer);

export const GlobalStateProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducedReducers, initialState);

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
