import React from 'react';
import NoteCard from './NoteCard';

const NoteList = ({ notes, onDelete, onStatusChange }) => {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p>No notes for this date.</p>
      ) : (
        notes.map((note) => (
          <NoteCard 
            key={note.id} 
            note={note} 
            onDelete={onDelete} 
            onStatusChange={onStatusChange} 
          />
        ))
      )}
    </div>
  );
};

export default NoteList;
