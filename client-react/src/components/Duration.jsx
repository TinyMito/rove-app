import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Duration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Duration() {
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

  const formatToDDMMYYYY = (date) => {
    return date.toLocaleDateString("en-GB");
  };

  // handle the "Continue" button click
  const handleContinueClick = async () => {
    if (startDate && endDate) {
      try {
        // Create an object with the trip duration data
        const tripData = {
          startDate: formatToDDMMYYYY(startDate),
          endDate: formatToDDMMYYYY(endDate),
        };

        // Send the trip duration data to the server
        const response = await axios.post("/api/duration", tripData);

        if (response.status === 200) {
          console.log("Trip duration inserted successfully.");
          // Redirect to the next page
          navigate("/");
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
    <div className="body">
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

      <button onClick={handleContinueClick}>Continue</button>
    </div>
  );
}
