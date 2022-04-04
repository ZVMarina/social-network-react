import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '../index.css';
import Header from './Header';
import Messages from './Messages';
import Navbar from './Navbar';
import Profile from './Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="page">
          <Header />
          <Navbar />
          <main className="main">
            <Routes>
              <Route path='/profile' element={<Profile />} />
              <Route path='/messages' element={<Messages />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;