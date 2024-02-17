import React from 'react';

function Note({ note }) {
  return (
    <li>
      {note.content} <span>{note.date}</span>
    </li>
  );
}

export default Note
