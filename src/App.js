import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esse é meu Segundo App.
        </p>
        <p>
          Vitin é BRABO!!!
        </p>
        <a
          className="App-link"
          href="http://comunidadecloud.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cloud Treinamentos
        </a>
      </header>
    </div>
  );
}

export default App;
