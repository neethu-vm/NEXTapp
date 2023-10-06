// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from "./Store";
import AlertTemplate from "react-alert-template-basic";
import { transitions, positions,types, Provider as AlertProvider } from 'react-alert'

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 4000,
  offset: '20px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
  types:types.SUCCESS,
   
}

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <Provider store={store}>
      <App />
    </Provider>
  </AlertProvider>,
  document.getElementById('root')
);