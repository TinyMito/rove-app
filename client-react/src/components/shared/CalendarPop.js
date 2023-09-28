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
          label="Check In"
          value={prop.checkInDate}
          onChange={(newValue) => prop.setCheckInDate(newValue)} />
        {/* convert the newvalue JS date object to string value. */}

        <DatePicker
          label="Check Out"
          value={prop.checkOutDate}
          onChange={(newValue) => prop.setCheckOutDate(newValue)} />

      </DemoContainer>
    </LocalizationProvider>
  );
}