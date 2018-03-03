import React, { Component } from 'react';
import './App.css';

import View from './templates/view';

function Header(props) {
  return(
    <View id="header">
      <headerbg><ld>TRANSCRIBE</ld><subheader>Breaking the Boundaries of Speech-to-Text Services</subheader></headerbg>
    </View>
  );
}

function Inspiration(props) {
  return(
    <View>
      <hd>Inspiration</hd>
      <p>
        Transcribe stemmed from a process we noticed was missing during lectures and conferences.
        Closed Captioning is a service provided for movies and entertainment to allow for people who are visually imparied partake in the program and subtitles for media in other languages than ones own.
        We wanted to combine the worlds of captioning and learning by facilitating real-time continuous speech conversion and displaying.
      </p>
    </View>
  );
}

function HowItWorks(props) {
  return(
    <View>
      <hd>How It Works</hd>
      <p id="img">
        <img src= { require('./images/transcribe-system.png') } alt="Transcribe System"/>
      </p>
    </View>
  );
}

function Footer(props) {
  return (
    <View id="footer">
      <footer>Transcribe Speech Technologies &copy;2017</footer>
    </View>
  );
}

class App extends Component {
  render() {
    return (
      <div id="conatainer">
        <Header />
        <Inspiration />
        <HowItWorks />
        <Footer />
      </div>
    );
  }
}

export default App;
