import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DatePicker from 'react-datepicker';
import { useState, useEffect } from 'react'; // Import useEffect
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function Modal({ locationName, placeId , attractionId, photoUrl, attractionAddress, attractionName}) {
  const [open, setOpen] = React.useState(false);
  const [startDate, setStartDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showAlert, setShowAlert] = React.useState(false);
  const [modalLocationName, setModalLocationName] = useState(locationName);
  const [modalPlaceId, setModalPlaceId] = useState(placeId);
  const [modalAttractionId, setAttractionId] = useState(attractionId)
  const [modalPhotoUrl, setPhotoUrl] = useState(photoUrl)
  const [attractionAddressName, setAttractionAddress] = useState(attractionAddress)
  const [attractionActualName, setAttractionName] = useState(attractionName)
  // Use useEffect to update state variables when props change
  useEffect(() => {
    setModalLocationName(locationName);
    setModalPlaceId(placeId);
    setAttractionId(attractionId);
    setPhotoUrl(photoUrl)
    setAttractionAddress(attractionAddress)
    setAttractionName(attractionName)
  }, [locationName, placeId, attractionId, photoUrl, attractionAddress, attractionName]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const handleSubmit = async () => {
    console.log('Submitting form...');
    if (startDate !== null && selectedTime !== null) {
      console.log('it works here');
  
      try {
        // Format the date as "yyyy-MM-dd"
        const formattedDate = startDate.toISOString().split('T')[0];
  
        // Create a new Date object with the time from selectedTime
        const selectedDateTime = new Date(selectedTime);
        
        // Extract hours and minutes from selectedDateTime
        const hours = selectedDateTime.getHours();
        const minutes = selectedDateTime.getMinutes();
  
        // Format the time as "HH:mm"
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
        const tripData = {
          destination_id: modalPlaceId,
          destination_name:modalLocationName,
          place_id:modalAttractionId,
          place_name: attractionActualName,
          place_address: attractionAddressName,
          user_id:1,
          schedule_id:1,
          date:formattedDate,
          start_time: formattedTime,
          attraction_photo_url: modalPhotoUrl
        };
  
        const response = await axios.post("/api/trip", tripData);
        console.log('Response:', response);
        if (response.status === 200) {
          console.log("Trip inserted!!!");
        } else {
          console.error("Failed to insert trip!");
        }
      } catch (error) {
        console.error("Error inserting trip:", error);
      }
    } else {
      console.error("Please fill in both fields!");
      setShowAlert(true);
    }
  };
  

  const handleClose = () => {
    setOpen(false);
    if (startDate !== null && selectedTime !== null) {
      console.log(startDate, selectedTime);
    } else {
      setShowAlert(true);
    }
  };

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
        fullWidth={true}
        maxWidth="sm"
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
                format="HH:mm"
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
            onClick={handleSubmit}
            disabled={isConfirmDisabled()}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
