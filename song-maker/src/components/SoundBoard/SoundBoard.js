import React, { Component } from 'react';
import Column from '../Column/Column';
import './SoundBoard.css';
import { connect } from 'react-redux';

class SoundBoard extends Component {
  
  render() {
    let { columnsData, playing } = this.props;

    let columns = columnsData.map((column, col) => <Column col={col} /> );

    return (
      <div className="sound-board">
        { columns }
      </div>
    );
  }
}

function mapStateToProps(state){
  let { columnsData, playing } = state;
  return { columnsData, playing };
}

export default connect(mapStateToProps)(SoundBoard);
