import { useState, useCallback } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";

const formatTime = (time) => {
  // Split the time into hours and minutes
  const [hours, minutes] = time.split(':');

  // Ensure that both hours and minutes are two digits
  const formattedHours = hours.padStart(2, '0');
  const formattedMinutes = minutes.padStart(2, '0');

  // Combine the formatted hours and minutes
  const formattedTime = `${formattedHours}:${formattedMinutes}`;

  return formattedTime;
};


export default function BasicTimePicker({ tripId, startTime, updateTrip }) {

  const [isEditing, setIsEditing] = useState(false);

  // const [value, setValue] = useState<Dayjs | null>(dayjs(new Date())); 
  
  const handleSubmit = (newValue) => {
    console.log('value', newValue); 
    const newStartTime = formatTime(`${newValue.$H}:${newValue.$m}`);
    setIsEditing(false);
    updateTrip(tripId, newStartTime);
  }

  return (
    <>
      {isEditing?    
      <LocalizationProvider 
        dateAdapter={AdapterDayjs}
        localeText={{ newTimePlaceholder: 'Select a new time' }}
      >
      <DemoContainer
        components={['TimePicker']}>
        <TimePicker 
          label={startTime}
          startTime={startTime}
          tripId={tripId}
          onAccept={handleSubmit}
          // onChange={(newValue) => setValue(newValue)} 
          format="HH:mm"
        />
      </DemoContainer>
    </LocalizationProvider> : <div
      onClick={() => {
        setIsEditing((prev) => {
          return !prev;
        })
      }}
    >{startTime}<QueryBuilderIcon/></div>}
    </>
  );
}
