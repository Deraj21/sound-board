import React, { Component } from 'react';
import Note from '../Note/Note';
import './Column.css';
import { connect } from 'react-redux';

class Column extends Component {

  render() {
    let { col, columnsData } = this.props;

    let notes = columnsData[col].map((note, row) => <Note col={col} row={row} />);

    return (
      <div className="column unlit">
        { notes }
      </div>
    );
  }

}

function mapStateToProps(state){
  let { playing, columnsData } = state;
  return { playing, columnsData };
}

export default connect(mapStateToProps)(Column);