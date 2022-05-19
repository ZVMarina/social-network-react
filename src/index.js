import React from 'react';
import './index.css';
import App from './components/App';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';
import * as ReactDOMClient from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </HashRouter>
)