import React from 'react';

const Login = ({ atuhtnticated }) => {
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
