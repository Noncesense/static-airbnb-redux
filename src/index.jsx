import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

import '../assets/stylesheets/application.scss';

import flatsReducer from './reducers/flats_reducer';
import selectedFlat from './reducers/selected_flat_reducer';
const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlat
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

import App from './components/App.jsx';

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={createStore(reducers, {},  middlewares)}>
    <App/>
  </Provider>, root);
