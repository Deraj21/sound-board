import React, { Component } from 'react';
import Column from './Column';

const columnsData = [
  //  1,    2,    3,    4,    5,    6,    7,    8,    9,    10,   11,   12,   13,   14
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], //  1
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], //  2
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], //  3
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], //  4
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], //  5
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], //  6
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], //  7
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], //  8
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], //  9
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 10
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 11
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 12
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 13
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 14
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 15
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 16
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 17
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 18
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 19
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 20
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 21
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 22
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 23
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 24
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 25
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 26
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 27
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 28
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 29
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 30
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ], // 31
  [ true, true, true, true, true, true, true, true, true, true, true, true, true, true ]  // 32
];

class SoundBoard extends Component {
  
  render() {
    let columns = [];
    
    for (let i = 0; i < 32; i++){
      columns.push( Column(i, columnsData[i]) );
    }

    return (
      <div className="sound-board">
        Sound Board
        { columns }
      </div>
    );
  }
}

export default SoundBoard;
