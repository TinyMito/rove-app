import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Duration.css";

export default function Duration() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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

  // handle the "Continue" button click
  const handleContinueClick = () => {
    console.log("Continue button clicked!");
  };

  return (
    <div>
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
