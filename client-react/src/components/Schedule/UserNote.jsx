import { useState, useEffect } from 'react';

// MUI textfield
import TextField from '@mui/material/TextField';

// Icon
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';


export default function UserNote({userNote, onSubmit}) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedUserNote, setEditedUserNote] = useState(''); // Initialize with the user's note
  useEffect(() => {
    setEditedUserNote(userNote);
  },[userNote])

  return (
    <div>
      {isEditing? (
        <div className="user-note-edit-schedule">
          <TextField
            className="user-note-schedule"
            fullWidth
            sx={{ m: 0.05 }}
            id="standard-multiline-flexible"
            multiline
            maxRows={4}
            variant="standard"
            onChange={(e) => setEditedUserNote(e.target.value)}
            value={editedUserNote}
            onBlur={() => onSubmit(editedUserNote)}
          />
          <TaskAltIcon
            className="edit-trip-usernote"
            onClick={() => {
              setIsEditing((prev) => {
                return !prev;
              })
            }}
          />
        </div>
      ) : (
        <div
          className="user-note-display-schedule"
          onClick={() => {
            setIsEditing((prev) => !prev);
          }}
        >
          {userNote}
          <CreateTwoToneIcon
            className="edit-trip-usernote" />
        </div>             
      )} 
    </div>
  );
}
