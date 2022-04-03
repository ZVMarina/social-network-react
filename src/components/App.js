import '../index.css';
import Header from './Header';
import Navbar from './Navbar';
import Main from './Main';

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