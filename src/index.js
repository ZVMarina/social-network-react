import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const postsData = [
  { post: "Hey, is anybody here?" },
  { post: "It's my first post" }
]

const dialogsData = [
  { id: 1, name: "Geralt of Rivia" },
  { id: 2, name: "Cirilla" },
  { id: 3, name: "Triss Merigold" },
  { id: 4, name: "Keira Metz" },
  { id: 5, name: "Philippa Eilhart" },
  { id: 6, name: "Sheala de Tancarville" },
  { id: 7, name: "Lodge of Sorceresse" },
]

const messagesData = [
  { message: "Hey, Yen! Where is our unicorn?" },
  { message: "Yen, Geralt and I are practicing sword strikes. See you later." },
  { message: "When are you coming to the meeting, Yen?" },
]

ReactDOM.render(
  <React.StrictMode>
    <App
      posts={postsData}
      dialogs={dialogsData}
      messages={messagesData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

export { postsData, dialogsData, messagesData };
