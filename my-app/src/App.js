import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now() }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const updateNoteStatus = (id, status) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, status } : note
    ));
  };

  const notesForSelectedDate = notes.filter(note => note.date === selectedDate);

  return (
    <div className="App">
      <h1>Note Book</h1>
      
      
      <NoteForm className="ratan" onAddNote={addNote} />


      <input className="tatva"
        type="date" 
        value={selectedDate} 
        onChange={(e) => setSelectedDate(e.target.value)} 
      />
      
      <h2>Notes for {selectedDate || 'Select a Date'}</h2>
      <NoteList 
        notes={notesForSelectedDate} 
        onDelete={deleteNote} 
        onStatusChange={updateNoteStatus} 
      />
    </div>
  );
}

export default App;
