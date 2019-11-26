// ./src/index.js

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';
import { create } from 'domain';

const store = createStore(
    shoppingListItemReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  

ReactDOM.render(
    <Provider store={store}>
      < App />
    </Provider>,
    document.getElementById('root')
);
