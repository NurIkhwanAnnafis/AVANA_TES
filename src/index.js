import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.css';
import '../src/styles/main.scss';
import { Provider } from 'react-redux';
import App from '../src/containers/App';
import reportWebVitals from '../src/test/reportWebVitals';
import store from './stores/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
