import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DatePicker from 'react-datepicker';
import Alert from '@mui/material/Alert';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// Dropdown MUI
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import '../../styles/Card.scss';

import { useState, useEffect } from 'react'; // Import useEffect
import axios from 'axios';

export default function Modal({ 
  userData,
  setUserData,
  scheduleStart, 
  scheduleEnd, 
  scheduleId,
  uniqueIds,
  locationName, 
  userId, 
  placeId, 
  attractionId, 
  photoUrl, 
  attractionAddress, 
  attractionName, 
  longitude, 
  latitude
}) {
  const navigate = useNavigate();

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

  // Dropdown State
  const [scheduleSelect, setScheduleSelect] = React.useState('');
  const [scheduleList, setScheduleList] = useState([]);
  const [noSchedules, setNoSchedules] = useState(false);

  // Dropdown On Change
  const handleChange = (event) => {
    setScheduleSelect(event.target.value);
  };

  // Dropdown Data 
  useEffect(() => {
    axios.get(`/api/user/${userId}`)
      .then((res) => {
        const filteredSchedule = res.data.schedule.filter((item) => uniqueIds.includes(item.id));
        setScheduleList(filteredSchedule);

        // Check if there's only one item in scheduleList and automatically select it
        console.log("Receiving Schedule IDs", filteredSchedule)
        if (filteredSchedule.length === 1) {
          setScheduleSelect(filteredSchedule[0].id);
        }

        // If there are no schedules available set true
        if (filteredSchedule.length === 0) {
          setNoSchedules(true);
        } else {
          setNoSchedules(false);
        }
      })
      .catch((err) => {
        setScheduleList({ error: err.message });
      });
  }, [uniqueIds]);

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

  const handleCreate = () => {
    navigate('/survey');
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
          schedule_id: scheduleSelect,
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
        sx={{overflow: 'visible !important'}}
      >
        
        {noSchedules ? (
          <>
          <DialogTitle>Do you have a schedule?</DialogTitle>
          <DialogContent sx={{minHeight: '50px', width: 'auto', borderRadius: '15px'}}>
            <DialogContentText>
              You do not have any available schedules for these attractions.<br/>Please create a schedule first!
            </DialogContentText>
            <DialogActions>
              <Button size="large" href="/survey">Click here to create a schedule!</Button>
            </DialogActions>
          </DialogContent>
          </>
        ) : (
          <>
          <DialogTitle>Trip Details</DialogTitle>
          <DialogContent sx={{minHeight: '450px', width: 'auto', borderRadius: '15px'}}>
  
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <DialogContentText>
                  Select a schedule:
                </DialogContentText>
                <Select
                  id="schedulePicker"
                  name="schedulePicker"
                  required={true}
                  value={scheduleSelect}
                  onChange={handleChange}
                  disabled={scheduleList.length === 1} // Disable if single object
                >
                  {scheduleList.map((scheduleItem, index) => (
                    <MenuItem 
                      key={index} 
                      sx={{boxShadow: 'none !important', fontSize: '1.3em !important'}}
                      size="large"
                      value={scheduleItem.id}>
                      ( {scheduleItem.start_date} - {scheduleItem.end_date} ) {scheduleItem.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          
            {/* <h3>{scheduleStart && (`For Schedule: ${scheduleStart} to ${scheduleEnd}`)}</h3> */}
  
            <div className="dialog-component">
            <DialogContentText>
              Select the date for this attraction:
            </DialogContentText>
  
            <DatePicker
              id="attractionDate"
              name="attractionDate"
              selected={startDate}
              onChange={handleStartDateChange}
              selectsStart
              startDate={startDate}
              className="material-ui-datepicker"
            />
          </div>
          <div className="dialog-component">
            <DialogContentText>Select the time for this attraction:</DialogContentText>
  
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker']}>
                <TimePicker
                  id="attractionTime"
                  name="attractionTime"
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
            <Button size="large" onClick={handleCreate}>New Schedule</Button>
            <Button size="large" onClick={handleCancel}>Cancel</Button>
            <Button
              size="large"
              onClick={handleSubmit}
              disabled={isConfirmDisabled() || scheduleSelect === ''}
            >
              Confirm
            </Button>
          </DialogActions>
          </>
        )}
      </Dialog>
      
    </div>
  );
}
