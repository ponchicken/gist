import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import promiseMiddleware from 'redux-promise'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App';
import './assets/styles/style.scss'
import registerServiceWorker from './registerServiceWorker';

import { store, persistor } from './configureStore'


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
