import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Profile from './components/Profile';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Profile />
  </Provider>,
  document.getElementById('root')
);
