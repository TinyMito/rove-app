import { useState, useEffect, useCallback } from 'react';

export const useTimeLine = ({ id, date }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    if (date) {
      fetch(`/api/trip?scheduleId=${id}&date=${date}`)
        .then((response) => {
          return response.json()
        })
        .then((response) => {
          setData(response)
        })
    }
  }, [id, date])

  const deleteTrip = (tripId) => {
    fetch(`/api/trip/${tripId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        console.log('response', response)
        if (response.status === 200) {
          fetch(`/api/trip?scheduleId=${id}&date=${date}`)
            .then((response) => response.json())
            .then((response) => {
              console.log('response', response)
              setData(response);
            })
            .catch((error) => {
              console.error('Error fetching updated trip data:', error);
            });
        }
      })
      .catch((error) => {
        console.error('Error deleting trip:', error);
      })
      .catch((error) => {
        console.error('error', error);
      });
  }


  return { data, deleteTrip };
};

