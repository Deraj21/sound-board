import React from 'react';
import './Note.css';

export default function Note(row, col, data) {

  function colorNote(){
    let note = document.querySelector(`.note-${col}-${row}`);
    note.style["background-color"] = "cadetblue";
  }

  return (
    <div onClick={() => colorNote()} className={`note note-${col}-${row}`}>
    </div>
  );
}
