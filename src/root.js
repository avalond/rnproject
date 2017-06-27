/**
 * Created by kevin on 6/27/17.
 */
import React, {Component}from 'react';
import {Provider} from 'react-redux'
import App from './components/app'
import store from './store/store'

export default class Root extends Component {
  render() {
    return (
        <Provider store={store}>
          <App/>
        </Provider>
    );
  }
}
