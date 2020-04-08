import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routing from './component/Routing';

ReactDOM.render(
  <Routing>
    <App />
  </Routing>,
  document.getElementById('root')
);
