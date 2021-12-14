import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

import axios from 'axios';
import { RecoilRoot } from 'recoil';

axios.defaults.baseURL = "http://localhost:8000/api/";
axios.interceptors.request.use((config) => {
    let token = `Bearer ${localStorage.getItem('tokenUser')}`
    config.headers.Authorization = token
    return config
})

ReactDOM.render(
  <StrictMode>
      <RecoilRoot>
          <App />
      </RecoilRoot>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
