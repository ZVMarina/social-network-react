import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals'
import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App
        store={store}
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>
  </BrowserRouter>
  , document.getElementById('root')
);

reportWebVitals();

