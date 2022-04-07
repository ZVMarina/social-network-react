/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals'
import { addPost, updatePostText } from './redax/state'

export const rerenderTree = (state) => {
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
} */