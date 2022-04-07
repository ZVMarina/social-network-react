import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import state from './redax/state'
import { addPost } from './redax/state'

ReactDOM.render(
  <React.StrictMode>
    <App
      state={state}
      addPost={addPost}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
