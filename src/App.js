import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function handleKeyPress(e) {
    e.preventDefault(e);
    if(document.getElementById(e.key.toUpperCase()) ){
      document.getElementById("display").innerText = e.key.toUpperCase();
      document.getElementById(e.key.toUpperCase()).play();
    }
  }

  return (
    <div
      className="App"
      id="drum-machine"
      tabIndex="1"
      onKeyPress={handleKeyPress}
      >
      <header className="App-header">
        <h1>Drum Machine</h1>
      </header>
      <main>
        <DrumBox/>
      </main>
      <footer><span>Made by <a href="">Santos Gonzalez</a></span></footer>
    </div>
  );
}

class DrumBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padList: ["Q","W","E","A","S","D","Z","X","C"],
      // drum files from https://codepen.io/freeCodeCamp/pen/MJyNMd
      drumList: [
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
      ],
      otherList: [
        'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
      ]
    };
  }
  render() {
    return(
      <section
        className="drum-box"
        >
        <article id="display">Hit a Drum Pad!</article>
        {
          this.state.padList.map( (drum, index) => {
            return <DrumPad
              key={drum}
              id= {`drum ${index}`}
              drum={drum}
              index={index}
              src={this.state.drumList[index]}
              />
          })
        }
      </section>
    )
  }
}

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = (e) => {
    document.getElementById("display").innerText = this.props.drum;
    document.getElementById(this.props.drum).play();
  }
  render() {
    return (
      <button
        className="drum-pad"
        id={this.props.id}
        onClick={this.handleClick}
        >
        {this.props.drum}
        <audio id={this.props.drum} className="clip" src={this.props.src}></audio>
      </button>
    )
  }
}
export default App;
