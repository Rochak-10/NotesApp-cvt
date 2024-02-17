import React from 'react';
import Note from './Note';

function NoteList({ notes }) {
  return (
    <ul>
      {notes.map((note) => (
        <Note key={note.date} note={note} />
      ))}
    </ul>
  );
}

export default NoteList;
