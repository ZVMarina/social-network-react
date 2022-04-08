import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals'
import store from './redax/state';

const rerenderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        updatePostText={store.updatePostText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  reportWebVitals();
}

rerenderTree(store.getState());

store.subscribe(rerenderTree);

