import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SoundBoard from './components/SoundBoard';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        app
        <Header />
        <SoundBoard />
        <Footer />
      </div>
    );
  }
}

export default App;
