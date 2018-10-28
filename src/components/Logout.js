import React from 'react';
import { connect } from '../globalState';

const Logout = ({ authenticated, dispatch }) => {
  const handleLogout = e => {
    e.preventDefault();
    dispatch({ type: 'logout' });
  };

  if (!authenticated) return null;
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default connect(Logout);
