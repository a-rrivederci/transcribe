import React, { Component } from 'react';
import './App.css';

import View from './templates/view';
import Time from './templates/time';

function Header(props) {
  return(
    <View id="header">
      <Time />
      <headerbg><ld>TRANSCRIBE</ld><subheader>Breaking the Boundaries of Speech-to-Text Services</subheader></headerbg>
    </View>
  );
}

function Inspiration(props) {
  return(
    <View>
      <hd>Inspiration</hd>
      <p>Deux Ex in pacemoiaoiaia aoinaioaw aoinawif aweionawweawiwefoe e owaeifoiawemfiwaoeiwae iawoimfioawwmeioawefioaweie wao fioawefiaweawoefoaw efoiwaef wfiweo woifmw efwo  efiwmaeomf</p>
    </View>
  );
}

function About(props) {
  return(
    <View>
      <hd>About</hd>
      <p>aonfaoweifowaiefwoemfopwefmoweowpeofwpefw</p>
    </View>
  );
}

function HowItWorks(props) {
  return(
    <View>
      <hd>How It Works</hd>
      <p>a[f,aep[wa[pefw[pew[pewepwefwef[pwe[pw wewfpmwpeomfw wpeofmwefkewfw wepf</p>
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
        <About />
        <HowItWorks />
        <Footer />
      </div>
    );
  }
}

export default App;
