import { useState, useEffect, useCallback } from 'react';

export const useTimeLine = ({ id, date }) => {

  const [data, setData] = useState([]);

  const handleFetchTrips = useCallback(() => {
    fetch(`/api/trip?scheduleId=${id}&date=${date}`)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error('Error fetching updated trip data:', error);
      });
  }, [id, date])

  useEffect(() => {
    if (date) {
      handleFetchTrips();
    }
  }, [id, date])

  const deleteTrip = useCallback((tripId) => {
    fetch(`/api/trip/${tripId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        console.log('response', response)
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
  }, []);


  return { data, deleteTrip, handleFetchTrips };
};

