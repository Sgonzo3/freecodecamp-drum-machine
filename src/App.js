import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" id="drum-machine">
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
      <main id="display">
        <section class="drum-box">
          <li id="" key="" class="drum-pad">Q</li>
          <li id="" key="" class="drum-pad">W</li>
          <li id="" key="" class="drum-pad">E</li>

          <li id="" key="" class="drum-pad">A</li>
          <li id="" key="" class="drum-pad">S</li>
          <li id="" key="" class="drum-pad">D</li>

          <li id="" key="" class="drum-pad">Z</li>
          <li id="" key="" class="drum-pad">X</li>
          <li id="" key="" class="drum-pad">C</li>
        </section>

      </main>
      <footer></footer>
    </div>
  );
}

export default App;
