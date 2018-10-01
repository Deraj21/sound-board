import React, { Component } from 'react';
import "./Footer.css";
import { connect } from 'react-redux';
import { updateTempo, updatePlaying, clearColumnsData } from '../../ducks/reducer';

class Footer extends Component {

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
      this.props.updatePlaying(false);
    } else {
      symbol.className = 'stop';
      this.props.updatePlaying(true);
    }
  }

  clear(){
    this.props.clearColumnsData();
    let noteNodeList = document.querySelectorAll('.note');
    noteNodeList.forEach(note => note.style['background-color'] = 'white');
  }

  render() {
    let { tempo } = this.props;

    return (
      <div className="footer">
        <button onClick={e => this.changeSymbol(e.target)} className="play-pause" children="true">
          <div className="play"></div>
        </button>
        <div className="tempo-slider">
          <p>Tempo</p>
          <input onChange={e => this.props.updateTempo(e.target.value)} type="range" max="240" min="40" value={tempo} />
          <p id="tempo-number">{tempo}</p>
        </div>
        <button id="clear-btn" onClick={() => this.clear() } >CLEAR</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  let { tempo } = state;
  return { tempo };
}

export default connect(mapStateToProps, { updateTempo, updatePlaying, clearColumnsData })(Footer);
