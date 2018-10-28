import React, { useState } from 'react';
import { connect } from '../globalState';

const initialValues = { username: '', passwork: '' };
const Login = ({ authenticated, dispatch }) => {
  const [values, setState] = useState(initialValues);
  const handleUsername = e => {
    e.preventDefault();
    setState({ username: e.target.value, password: values.password });
  };

  const handlePassword = e => {
    e.preventDefault();
    setState({ username: values.username, password: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'login' });
  };

  if (authenticated) return null;
  return (
    <div>
      <form>
        <input value={values.username} key="username" placeholder="username" onChange={handleUsername} />
        <input value={values.password} key="password" placeholder="password" onChange={handlePassword} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default connect(Login);
