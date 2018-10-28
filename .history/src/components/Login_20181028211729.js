import React from 'react';
import { connect } from '../globalState';

const Login = ({ authenticated }) => {
  if (authenticated) return null;
  return (
    <div>
      <form onSubmit={values => console.log(values)}>
        <input key="username" placeholder="username" />
        <input key="password" placeholder="password" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
