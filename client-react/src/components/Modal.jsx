import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import Alert from '@mui/material/Alert'; // Import Alert component from Material-UI

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function Modal() {
  const [open, setOpen] = React.useState(false);
  const [startDate, setStartDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null); // State variable for selected time

  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('sm');
  const [showAlert, setShowAlert] = React.useState(false); // State variable for showing the alert

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time); // Update the selected time when the TimePicker changes
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false)
  };

  const handleClose = () => {
    setOpen(false);
    if (startDate !== null && selectedTime !== null) {
      console.log(startDate, selectedTime); // Use the selected time
    } else {
      setShowAlert(true); // Show the alert if date or time is missing
    }
  };

  // Function to check if the "Confirm" button should be disabled
  const isConfirmDisabled = () => {
    return startDate === null || selectedTime === null;
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add this attraction to your trip!
      </Button>
      <Dialog
        open={open}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleClose}
      >
        <DialogTitle>Trip Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select the date for this attraction!
          </DialogContentText>

          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            className="material-ui-datepicker"
          />

          <DialogContentText>Select the time for this attraction!</DialogContentText>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker']}>
              <TimePicker
                label="Select the time!"
                onChange={handleTimeChange}
              />
            </DemoContainer>
          </LocalizationProvider>

          {showAlert && (
            <Alert severity="error">
              Please select both date and time.
            </Alert>
          )}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button
            onClick={handleClose}
            disabled={isConfirmDisabled()} // Disable the "Confirm" button if required fields are not filled
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
