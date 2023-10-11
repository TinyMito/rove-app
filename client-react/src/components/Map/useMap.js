import { useState, useEffect } from 'react';

export const useMap = ({ id }) => {

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/trip/map?scheduleId=${id}`)

      .then((response) => {
        return response.json()
      })
      .then((response) => {
        setTrips(response);
      });
  }, [id]);


  return { trips };
};