import { Routes, Route } from 'react-router-dom';
import '../index.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';

function App(props) {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/profile*" element={<ProfileContainer />} />
            <Route path="/dialogs*" element={<DialogsContainer props={props.store} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;