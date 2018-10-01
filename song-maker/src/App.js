import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SoundBoard from './components/SoundBoard/SoundBoard';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <SoundBoard />
        <Footer />
      </div>
    );
  }
}

export default App;
