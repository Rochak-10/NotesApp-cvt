import React from 'react';

function NoteForm({ newNote, setNewNote, handleSubmitNote }) {
  return (
    <form onSubmit={handleSubmitNote}>
      <textarea
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Enter your note..."
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
