import 'babel-polyfill';
import 'basscss/css/basscss.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './store/configureStore';
import routes from './store/config/router';

const initialState = {};
const store = configureStore(initialState, routes);

ReactDOM.render(
  <Provider store={ store }>
    <ReduxRouter />
  </Provider>,
  document.getElementById('root')
);
