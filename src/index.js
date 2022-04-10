import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals'
import store from './redax/redux-store';

const rerenderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );

  reportWebVitals();
}

rerenderTree(store.getState());

store.subscribe(() => {
  rerenderTree(store.getState())
});

