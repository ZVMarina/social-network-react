import React from 'react';
import './index.css';
import App from './components/App';
import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import * as ReactDOMClient from 'react-dom/client';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
)