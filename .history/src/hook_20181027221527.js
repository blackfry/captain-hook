import React from 'react';
import { CountContext, CountProvider, connect } from './context';

const Hook = props => {
  console.log('hook', { props });
  return (
    <div
      style={{
        position: 'absolute',
        left: '29%',
        paddingLeft: '150px'
      }}
    />
  );
};

const ExportHook = () => (
  <CountProvider>
    <CountContext.Consumer>{val => <Hook {...val} />}</CountContext.Consumer>
  </CountProvider>
);

// export default ExportHook;
export default connect(Hook);
