import React from 'react';
import Note from './Note';

export default function Column(id, notesData) {

  let notes = [];
  for (let i = 0; i < 32; i++){
    notes.push( Note(i, notesData[i]) );
  }

  return (
    <div className="column">
      -- column {id} --
      { notes }
    </div>
  );
}
