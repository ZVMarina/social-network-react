import { Routes, Route } from 'react-router-dom';
import '../index.css';
import Header from './Header';
import Dialogs from '../components/Dialogs/Dialogs';
import Navbar from './Navbar';
import News from './News';
import Profile from '../components/Profile/Profile';
import Music from './Music';
import Settings from './Settings';

function App(props) {
  return (
      <div className="App">
        <div className="page">
          <Header />
          <Navbar />
          <main className="main">
            <Routes>
              <Route path="/profile" element={<Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
                store={props.store}
              />}
              />
              <Route path="/dialogs*" element={<Dialogs
                dialogsPage={props.state.dialogsPage}
                dispatch={props.dispatch}
                store={props.store}
              />}
              />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
  );
}

export default App;