import React from 'react';
import AppProvider from './hooks';
import Router from './routes';

const App = () => {
  return (
    <>
        <AppProvider>
          <Router/> 
        </AppProvider>
    </>
  );
};
export default App;
