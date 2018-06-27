import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import '../assets/stylesheets/application.scss';

import flatsReducer from './reducers/flats_reducer';
import selectedFlat from './reducers/selected_flat_reducer';
const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlat
});

import App from './components/App.jsx';

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App/>
  </Provider>, root);
