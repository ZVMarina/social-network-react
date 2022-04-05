import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '../index.css';
import Header from './Header';
import Dialogs from './Dialogs';
import Navbar from './Navbar';
import News from './News';
import Profile from './Profile';
import Music from './Music';
import Settings from './Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="page">
          <Header />
          <Navbar />
          <main className="main">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/dialogs*" element={<Dialogs />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;