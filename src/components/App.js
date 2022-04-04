import '../index.css';
import Header from './Header';
import Messages from './Messages';
import Navbar from './Navbar';
import Profile from './Profile';

function App() {
  return (
    <div className="App">

      <div className="page">
        <Header />
        <Navbar />
        <main className="main">
          <Profile />
        </main>
        {/* <Messages /> */}
      </div>
    </div>
  );
}

export default App;