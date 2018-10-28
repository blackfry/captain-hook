import React from 'react';

const Login = ({ atuhtnticated }) => {
  if (authenticated) return null;
  return (
    <div>
      <form onSubmit={values => console.log(values)}>
        <input key="password">password</input>
        <input key="password">password</input>
        <button>Submit</button>
      </form>
    </div>
  );
};
