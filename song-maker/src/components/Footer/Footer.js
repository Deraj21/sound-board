import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
  constructor(props){
    super(props)

    this.state = {
      tempo: 120
    }
  }

  changeSymbol(target){
    let name = '';
    if (target.className === "play-pause"){
      name = target.children[0].className;
    } else {
      name = target.className;
    }
    
    let symbol = document.querySelector('.' + name);
    if (symbol.className === 'stop'){
      symbol.className = 'play';
    } else {
      symbol.className = 'stop';
    }
  }

  handleChange(e){
    this.setState({ tempo: e.target.value });
  }

  clear(){
    console.log('clear board');
  }

  render() {
    let { tempo } = this.state;

    return (
      <div className="footer">
        <button onClick={e => this.changeSymbol(e.target)} className="play-pause" children="true">
          <div className="play"></div>
        </button>
        <div className="tempo-slider">
          <p>Tempo</p>
          <input onChange={e => this.handleChange(e)} type="range" max="240" min="40" value={tempo} />
          <p id="tempo-number">{tempo}</p>
        </div>
        <button id="clear-btn" onClick={() => this.clear() } >CLEAR</button>
      </div>
    );
  }
}

export default Footer;
