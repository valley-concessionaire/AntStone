import React from 'react';
import logo from './valley.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo rounded-full m-16" alt="logo" />
        <p>
          I am the Scrum Master, don't I?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here begins this stormy history
        </a>
      </header>
    </div>
  );
}

export default App;
