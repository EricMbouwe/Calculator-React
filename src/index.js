import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import operate from './logic/operate';
import calculate from './logic/calculate';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

const data = {
  total: 78,
  next: 0,
  operation: '+/-',
};
