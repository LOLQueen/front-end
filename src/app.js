import 'babel-core/polyfill';
import 'basscss/css/basscss.css';
import React from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './store/configureStore';
import routes from './store/config/router';
import './styles.scss';

import {
  DevTools,
  DebugPanel,
  LogMonitor,
} from 'redux-devtools/lib/react';


const initialState = {};
const store = configureStore(initialState, routes);

React.render(
  <div>
    <Provider store={ store }>
      {() =>
        <ReduxRouter />
      }
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={ store }
                monitor={ LogMonitor }
                visibleOnLoad />
    </DebugPanel>
  </div>,
  document.getElementById('root')
);
