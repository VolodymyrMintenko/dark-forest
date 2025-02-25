import React, {JSX} from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Router from './router';
import { store } from './redux/store';

const App = (): JSX.Element => {

  return (
    <Provider store={store}>
        <Router />
        <ToastContainer />
    </Provider>
  );
};
export default App;
