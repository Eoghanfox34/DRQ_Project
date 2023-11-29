import React, { useState } from 'react';
import axios from 'axios';

const EditForm = ({ entityType, entityId, onClose, onUpdate }) => {
  const [editedName, setEditedName] = useState('');
  const [editedImage, setEditedImage] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await axios.patch(`/${entityType}/update/${entityId}`, {
        name: editedName,
        image: editedImage, 
      });
      onUpdate(response.data);
      onClose();
    } catch (error) {
      console.error(`Error updating ${entityType}:`, error.message);
    }
  };

  return (
    <div>
      <h3>Edit {entityType}</h3>
      <label>
        New {entityType} Name:
        <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
      </label>
      <label>
        New {entityType} Image URL:
        <input type="text" value={editedImage} onChange={(e) => setEditedImage(e.target.value)} />
      </label>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditForm;
