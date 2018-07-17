import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/style.scss';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise'

import rootReducer from './reducers'

import App from './App';
import registerServiceWorker from './registerServiceWorker';



const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
<Provider store={createStoreWithMiddleware(rootReducer)}>
  <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
