import React, { Component } from 'react';
import Column from '../Column/Column';
import './SoundBoard.css';

const columnsData = [
  //  0      1      2      3      4      5      6      7      8      9     10     11     12     13    14     15
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], //  0
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], //  1
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], //  2
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], //  3
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], //  4
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], //  5
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], //  6
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], //  7
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], //  8
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], //  9
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 10
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 11
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 12
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 13
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 14
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 15
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 16
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 17
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 18
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 19
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 20
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 21
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 22
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 23
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 24
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 25
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 26
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 27
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 28
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 29
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], // 30
  [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ]  // 31
];

class SoundBoard extends Component {
  
  render() {
    let columns = [];
    
    for (let i = 0; i < 32; i++){
      columns.push( Column(i, columnsData[i]) );
    }

    return (
      <div className="sound-board">
        { columns }
      </div>
    );
  }
}

export default SoundBoard;
