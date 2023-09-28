import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function CalendarPop(prop) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label="Start Date"
          // must receive the date as props from before
          value={prop.startDate}
          onChange={(newValue) => prop.setStartDate(newValue)} />
        {/* convert the newvalue JS date object to string value. */}

        <DatePicker
          label="End Date"
          // must receive the date as props from before
          value={prop.endDate}
          onChange={(newValue) => prop.setEndDate(newValue)} />

      </DemoContainer>
    </LocalizationProvider>
  );
}