/**
 * Created by kevin on 6/27/17.
 */
import thunk from 'react-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/RootReducer';

let store = createStore({},compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export  default store;

