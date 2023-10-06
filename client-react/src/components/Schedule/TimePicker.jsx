import { useState, useCallback } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";
// daysArray.extend(localizedFormat);

export default function BasicTimePicker({ tripId, startTime, onSubmit }) {
// make an endpoint that accepts trip and starttime
// when it's successful, 
  // option: updating the trip obj on the front-end
  // option: refetching everything (much easier)

  const [isEditing, setIsEditing] = useState(false);
  const handleSubmit = useCallback((time) => {
    console.log('value', time)
    setIsEditing(false);
  }, [])

  return (
    <>
      {isEditing?    
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer 
        sx={{ border: 'none' }}
        components={['TimePicker']}>
        <TimePicker 
          label={startTime}
          startTime={startTime}
          tripId={tripId}
          onAccept={handleSubmit}
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
