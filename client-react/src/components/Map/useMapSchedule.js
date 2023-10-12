import { useState, useEffect } from 'react';

export const useMapSchedule = ({ id }) => {

  const [trips, setTrips] = useState([]);
  const [centerCoord, setCenterCoord] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/trip/map?scheduleId=${id}`)

      .then((response) => {
        return response.json()
      })
      .then((response) => {
        setTrips(response);
        setCenterCoord([parseFloat(response[0].latitude), parseFloat(response[0].longitude)]);
      });
  }, [id]);

  return { trips, centerCoord };
};