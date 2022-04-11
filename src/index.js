import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals'
import store from './redux/reduxStore';

ReactDOM.render(
  <React.StrictMode>
    <App
      store={store}
      state={store.getState()}
      dispatch={store.dispatch.bind(store)}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

