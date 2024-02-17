import React, { useState } from 'react';
import { ChromePicker } from 'react-color'; // Import for color picker

function CreateGroupModal({ onConfirm, onCancel }) {
  const [groupName, setGroupName] = useState('');
  const [groupColor, setGroupColor] = useState('#fff'); // Initial white color

  const handleInputChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleColorChange = (color) => {
    setGroupColor(color.hex); // Update with hex value from react-color
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(groupName, groupColor);
  };

  return (
    <div className="modal">
      <h2>Create New Group</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="groupName">Group Name:</label>
          <input
            type="text"
            id="groupName"
            value={groupName}
            onChange={handleInputChange}
            required // Add required attribute for validation
          />
        </div>
        <div>
          <label htmlFor="groupColor">Group Color:</label>
          <ChromePicker
            color={groupColor}
            onChange={handleColorChange}
            // Additional color picker options (use appropriate ones based on usage)
            colors={['#fff', '#f00', '#00f', '#0f0', '#ff0', '#000']}
            type="sketch"
            width="200px"
          />
        </div>
        <div className="modal-actions">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" disabled={!groupName}>
            Create Group
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateGroupModal;
