import React, { Component } from 'react';
import './Note.css';
import { connect } from 'react-redux';
import { updateColumnsData } from '../../ducks/reducer';

class Note extends Component {

  handleClick(){
    let { col, row, columnsData } = this.props;
    this.props.updateColumnsData(col, row, !columnsData[col][row]);

    let note = document.querySelector(`.note-${col}-${row}`);
    if (note.style["background-color"] !== "white"){
      note.style["background-color"] = "white";
    } else {
      note.style["background-color"] = "cadetblue";
    }
  }

  componentDidMount(){
    let noteNodeList = document.querySelectorAll('.note');
    noteNodeList.forEach(note => note.style['background-color'] = 'white');
  }

  render(){
    let { col, row, columnsData } = this.props;

    return (
      <div onClick={() => this.handleClick()} className={`note note-${col}-${row}`}>
      </div>
    );
  }
}

function mapStateToProps(state){
  let { columnsData } = state;
  return { columnsData };
}

export default connect(mapStateToProps, { updateColumnsData })(Note);
