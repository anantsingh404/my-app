import React, { useState } from 'react';

const NoteForm = ({ onAddNote }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length <= 100 && date) {
      onAddNote({ text, date, status: 'scheduled' });
      setText('');
      setDate('');
    } else {
      alert('Note must be under 100 characters and date should be selected.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
      <div className="note-card">
      <textarea
  id="temp"
  rows="5" /* This will display 5 rows initially */
  value={text}
  onChange={(e) => setText(e.target.value)}
  placeholder="Drop your note here..."
  maxLength={100}
  className="note-input"
/>
        <div className="remcount">{100 - text.length} Characters Remaining</div>

        <input id="tata"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="note-date"
        />
        <button type="submit">Add Note</button>
      </div>
      </div>
    </form>
  );
};

export default NoteForm;
