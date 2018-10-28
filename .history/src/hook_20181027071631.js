import React, { useState } from 'react';

const Hook = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div style={{     position: 'absolute',
      left: '29%',
      paddingLeft: '150px'
  } }}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Hook;
