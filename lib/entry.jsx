import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Root from './components/root';
import reducer from './reducer';

document.addEventListener('DOMContentLoaded', () => {
  const store = createStore(reducer, {}, applyMiddleware(thunk, logger));
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
