import React from 'react';
import Note from '../Note/Note';
import './Column.css';

export default function Column(col, notesData) {

  let notes = [];
  for (let i = 0; i < 16; i++){
    notes.push( Note(i, col, notesData[i]) );
  }

  return (
    <div className="column unlit">
      { notes }
    </div>
  );
}
