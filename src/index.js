import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }from 'react-redux';
import { createStore } from 'redux';
// import { combineReducer } from 'redux';

import RReducer from './reducer';
import App from './App';


const store = createStore(RReducer)

ReactDOM.render(
 <Provider store={store}>
  <React.StrictMode>
   <App />
  </React.StrictMode>
 </Provider>,

 document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
