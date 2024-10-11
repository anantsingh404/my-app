import React from 'react';

const NoteCard = ({ note, onDelete, onStatusChange }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'scheduled':
        return 'note-card-scheduled';
      case 'done':
        return 'note-card-done';
      case 'pending':
        return 'note-card-pending';
      default:
        return '';
    }
  };

  return (
    <div className={`note-card ${getStatusClass(note.status)}`}>
      {/* Date in top-right */}
      <div className="note-date">{note.date}</div>

      {/* Note Heading */}
      <h3 className="note-heading">Task Overview</h3>

      {/* Note Text */}
      <p className="note-text">{note.text}</p>

      {/* Buttons */}
      <div className="buttonrow">
        <button className="a1" onClick={() => onDelete(note.id)}>Delete</button>
        <button className="a2" onClick={() => onStatusChange(note.id, 'scheduled')}>Mark Scheduled</button>
        <button className="a3" onClick={() => onStatusChange(note.id, 'pending')}>Mark Pending</button>
        <button className="a4" onClick={() => onStatusChange(note.id, 'done')}>Mark Done</button>
      </div>
    </div>
  );
};

export default NoteCard;
