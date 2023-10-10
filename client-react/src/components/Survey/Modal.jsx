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
import '../../styles/Card.scss';

export default function Modal({ scheduleStart, scheduleEnd, scheduleId, locationName, userId, placeId , attractionId, photoUrl, attractionAddress, attractionName, longitude, latitude}) {
  const [open, setOpen] = React.useState(false);
  const [startDate, setStartDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showAlert, setShowAlert] = React.useState(false);
  const [modalLocationName, setModalLocationName] = useState(locationName);
  const [modalPlaceId, setModalPlaceId] = useState(placeId);
  const [modalAttractionId, setAttractionId] = useState(attractionId)
  const [modalPhotoUrl, setPhotoUrl] = useState(photoUrl)
  const [attractionAddressName, setAttractionAddress] = useState
  (attractionAddress)
  const [attractionActualName, setAttractionName] = useState(attractionName)

  // Use useEffect to update state variables when props change
  useEffect(() => {
    setModalLocationName(locationName);
    setModalPlaceId(placeId);
    setAttractionId(attractionId);
    setPhotoUrl(photoUrl)
    setAttractionAddress(attractionAddress)
    setAttractionName(attractionName)
  }, [locationName, placeId, attractionId, photoUrl, attractionAddress, attractionName, longitude, latitude]);

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
    //console.log('Submitting form...');
    if (startDate !== null && selectedTime !== null) {
      //console.log('it works here');
  
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
        // Make a new date object for start of schedule
        const schedStart = new Date(scheduleStart)

        if (startDate < schedStart) {
          console.error('Error Inserting Date. Make sure you have selected dates you have previously chosen!');
          setShowAlert(true);
          return;
        }
        const tripData = {
          destination_id: modalPlaceId,
          destination_name:modalLocationName,
          place_id:modalAttractionId,
          place_name: attractionActualName,
          place_address: attractionAddressName,
          user_id: userId,
          schedule_id: scheduleId,
          date:formattedDate,
          start_time: formattedTime,
          attraction_photo_url: modalPhotoUrl,
          longitude: longitude,
          latitude: latitude
        };
  
        const response = await axios.post("/api/trip", tripData);
        //console.log('Response:', response);
        if (response.status === 200) {
          //console.log("Trip inserted!!!");
          handleClose();
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
      //console.log(startDate, selectedTime);
    } else {
      setShowAlert(true);
    }
  };

  const isConfirmDisabled = () => {
    return startDate === null || selectedTime === null;
  };

  return (
    <div>
      <div className="addBtn-position">
        <Button className="addBtn" size="large" fullWidth={true} variant="text" onClick={handleClickOpen}>
          <i className="bi bi-calendar-plus"></i>
        </Button>
      </div>

      <Dialog
        open={open}
        fullWidth={true}
        maxWidth="sm"
        onClose={handleClose}
      >
        
        <DialogTitle>Trip Details</DialogTitle>
        <DialogContent sx={{minHeight: '450px', width: 'auto', borderRadius: '15px'}}>
          <h3>{scheduleStart && (`For Schedule: ${scheduleStart} to ${scheduleEnd}`)}</h3>
          <div className="dialog-component">
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
        </div>
        <div className="dialog-component">
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
          </div>
          <div className="dialog-component">
          {showAlert && (
            <Alert severity="error">
              Error! You must insert a valid date based on your selected trip date!
            </Alert>
          )}
          </div>

        </DialogContent>
        <DialogActions>
          <Button size="large" onClick={handleCancel}>Cancel</Button>
          <Button
            size="large"
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
