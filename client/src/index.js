import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3300/api';

axios.interceptors.request.use(
  function(requestConfig) {
    requestConfig.headers.authorization = localStorage.getItem('jwt');
    return requestConfig;
  },
  function(error) {
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));
