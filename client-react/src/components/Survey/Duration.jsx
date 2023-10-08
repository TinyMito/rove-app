// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// GLOBAL DATA: Import GlobalData function
import { globalData } from '../../GlobalData';

// User CSS
import '../../styles/Duration.css'

// Import Navigation & Header
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

export default function Duration() {
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
          console.log("GLOBAL DATA: ", userData)
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
        <Navigation loggedIn={userData.loggedIn} userId={userData.id} userImg={userData.userImg} />
        <div className="flex-column">
          <Header userName={userData.userName} />
          <div className="body">
            {/* Your codes start here */}
            
      <h2>When are you traveling?</h2>
      <div className="date-picker-container">
        <div className="date-picker-label">
          <label>Start Date:</label>
        </div>
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
        <div className="date-picker-label">
          <label>End Date:</label>
        </div>
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
      <div>
        <p>Number of Days: {calculateTripDuration()}</p>
      </div>

      <Button onClick={handleContinueClick}>Continue</Button>

            {/* Your codes end here */}
            </div>
        </div>
      </div>
    </div>
  );
}
