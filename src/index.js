import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { applyMiddleware, createStore } from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk'
import { primeReducer } from './js/reducers'

const store = createStore(primeReducer, applyMiddleware(thunk) );

ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);