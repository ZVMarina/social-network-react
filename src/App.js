import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <div className="App">

      <div className="page">
        <Header />
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;