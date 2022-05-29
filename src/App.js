//import logo from './logo.svg';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World of Tabriz</h1>
        <a href="https://www.shecodes.io" target="_blank" rel="noreferrer">sheCodes</a>
        <Weather city="Paris"/>
      </header>
    </div>
  );
}

export default App;
