/**
 * Created by kevin on 6/27/17.
 */

import React from 'react';
import {Provider} from 'react-redux'
import App from './components/App'
import store from './store/Store'

const Root = () => (
    <Provider store={store}>
      <App />
    </Provider>
);
export  default Root;
