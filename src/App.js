import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRouter from './router/AppRouter'; // Use AppRouter for routing

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
