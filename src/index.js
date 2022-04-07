import state from './redax/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals'
import { addPost, updatePostText } from './redax/state'
import { subscribe } from './redax/state'

const rerenderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updatePostText={updatePostText}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  reportWebVitals();
}

rerenderTree(state);

subscribe(rerenderTree);

