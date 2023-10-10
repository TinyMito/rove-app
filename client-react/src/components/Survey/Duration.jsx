// MUI Components
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from 'useAuthentication';

// GLOBAL DATA: Import GlobalData function
import { globalData } from '../../GlobalData';

// User CSS
import '../../styles/Duration.scss'

// Import Navigation & Header
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

export default function Duration() {
  // Requires the user to be logged in
  const isAuthenticated = useAuthentication();

  // GLOBAL DATA: Add the useState const from globalData, ie. userData.id, userData.firstname etc
  const { userData, setUserData } = globalData();

  // EXAMPLE change user id in GLOBAL DATA
  const updateScheduleId = (newScheduleId, newStartDate, newEndDate) => {
    setUserData({ ...userData, scheduleId: newScheduleId, scheduleStartDate: newStartDate, scheduleEndDate: newEndDate });
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const calculateTripDuration = () => {
    if (startDate && endDate) {
      const oneDay = 24 * 60 * 60 * 1000;
      const days = Math.round(Math.abs((startDate - endDate) / oneDay)) + 1;
      return days;
    }
    return 0;
  };

  const formatToYYYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // handle the "Continue" button click
  const handleContinueClick = async () => {
    if (startDate && endDate && userData.id) {
      try {
        // Create an object with the trip duration data
        const tripData = {
          startDate: formatToYYYYMMDD(startDate),
          endDate: formatToYYYYMMDD(endDate),
          userId: userData.id
        };

        // Send the trip duration data to the server
        const response = await axios.post("/api/duration", tripData);

        if (response.status === 200) {
          const { newTrip, startDate, endDate } = response.data;
          //console.log(response.data)
          updateScheduleId(newTrip, startDate, endDate);
          //console.log("GLOBAL DATA: ", userData)
          navigate("/google");
        } else {
          console.error("Failed to insert trip duration.");
        }
      } catch (error) {
        console.error("Error inserting trip duration:", error);
      }
    } else {
      console.error("Please select start and end dates.");
    }
  };

  return (
    <div className="box"> 
      <div className="flex-row">
      <Navigation isAuthenticated={isAuthenticated} userImg={userData.userImg} />
        <div className="flex-column">
        <Header isAuthenticated={isAuthenticated} userName={userData.userFirst} />
          <div className="body">
            {/* Your codes start here */}
            
              <h1>When are you traveling?</h1>
              <div className="display-flow">

                <div className="date-picker-container">
                  <InputLabel htmlFor="outlined-adornment-password">Start Date:</InputLabel>
                  <DatePicker
                    selected={startDate}
                    onChange={handleStartDateChange}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    className="material-ui-datepicker"
                  />
                </div>

                <div className="date-picker-container">
                  <InputLabel htmlFor="outlined-adornment-password">End Date:</InputLabel>
                  <DatePicker
                    selected={endDate}
                    onChange={handleEndDateChange}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    className="material-ui-datepicker"
                  />
                </div>

              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ textAlign: 'center', padding: '25px' }}>
                  <h2>Number of Days: {calculateTripDuration()}</h2>
                </div>

                <Button size="large" onClick={handleContinueClick}>Continue</Button>
              </div>

            {/* Your codes end here */}
            </div>
        </div>
      </div>
    </div>
  );
}
