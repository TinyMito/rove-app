import { useState, useEffect, useCallback } from 'react';
import axios from "axios";

export const useTimeLine = ({ id, date }) => {
  const [data, setData] = useState([]);

  const handleFetchTrips = useCallback(() => {
    fetch(`/api/trip?scheduleId=${id}&date=${date}`)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        //console.log('response', response)
      })
      .catch((error) => {
        console.error('Error fetching updated trip data:', error);
      });
  }, [id, date])

  useEffect(() => {
    if (date) {
      handleFetchTrips();
    }
  }, [id, date, handleFetchTrips])

  const deleteTrip = useCallback((tripId) => {
    fetch(`/api/trip/${tripId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        //console.log('response', response)
        if (response.status === 200) {
          handleFetchTrips();
        }
      })
      .catch((error) => {
        console.error('Error deleting trip:', error);
      })
      .catch((error) => {
        console.error('error', error);
      });
  }, [handleFetchTrips]);

  const updateTrip = async (tripId, startTime, userNote) => {
    try {
      // Create an object with the trip
      const tripData = {
        tripId,
        startTime,
        userNote
      };

      // Send the trip updates data to the server
      const response = await axios.put(`/api/trip/${tripId}`, tripData);
      if (response.status === 200) {
        //console.log("Trip updated successfully.");
        handleFetchTrips();
      } else {
        console.error("Failed to update trip.");
      }
    } catch (error) {
      console.error("Error editing the trip", error);
    }
  };

  return { data, deleteTrip, handleFetchTrips, updateTrip };
};

