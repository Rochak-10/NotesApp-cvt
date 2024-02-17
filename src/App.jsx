import React, { useState, useEffect } from 'react';
import GroupList from './components/GroupList';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import CreateGroupModal from './utils/CreateGroupModal';
import createInitials from './utils/createInitials';

function App() {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [newNote, setNewNote] = useState('');
  const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setGroups(storedGroups);
    const initialSelectedGroup = localStorage.getItem('selectedGroup');
    setSelectedGroup(initialSelectedGroup || null);
  }, []);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
    localStorage.setItem('selectedGroup', selectedGroup);
  }, [groups, selectedGroup]);

  const handleCreateGroup = (groupName, groupColor) => {
    const newGroupName = createInitials(groupName);
    setGroups([...groups, { name: newGroupName, color: groupColor, notes: [] }]);
    setSelectedGroup(newGroupName);
    setIsCreateGroupModalOpen(false);
  };

  const handleSubmitNote = (e) => {
    e.preventDefault();
    const note = {
      content: newNote,
      date: new Date().toLocaleString(),
    };
    const updatedGroups = groups.map((group) =>
      group.name === selectedGroup ? { ...group, notes: [...group.notes, note] } : group
    );
    setGroups(updatedGroups);
    setNewNote('');
  };

  const notes = groups.find((group) => group.name === selectedGroup)?.notes || [];

  return (
    <div className="app">
      <div className="sidebar">
        <h2>Groups</h2>
        <GroupList groups={groups} selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
        <button onClick={() => setIsCreateGroupModalOpen(true)}>+ Create Group</button>
      </div>
      <div className="content">
        <h2>Notes ({selectedGroup || 'No group selected'})</h2>
        <NoteList notes={notes} />
        <NoteForm newNote={newNote} setNewNote={setNewNote} handleSubmitNote={handleSubmitNote} />
      </div>
      {isCreateGroupModalOpen && (
        <CreateGroupModal
          onConfirm={handleCreateGroup}
          onCancel={() => setIsCreateGroupModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
