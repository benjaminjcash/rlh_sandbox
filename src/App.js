import React from 'react';
// import GlobalSearch from './components/GlobalSearch/GlobalSearch';
import HelloRewards from './components/HelloRewards/HelloRewards';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <HelloRewards oktaid='00u1825xxdqWqi3pJ2p7'/>
      {/* <GlobalSearch /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
