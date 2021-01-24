import logo from './logo.svg';
import './App.css';
import TopHeader from './components/TopHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopHeader></TopHeader>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is pretty cool!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
