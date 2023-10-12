import { useState, useEffect } from 'react';

export const useMapSchedule = ({ id }) => {

  const [trips, setTrips] = useState([]);
  const [centerCoord, setCenterCoord] = useState(null);

  useEffect(() => {
    fetch(`/api/trip/map?scheduleId=${id}`)

      .then((response) => {
        return response.json()
      })
      .then((response) => {
        if (response.length > 0) {
          setTrips(response);
          setCenterCoord([parseFloat(response[0].latitude), parseFloat(response[0].longitude)]);
        } else {
          // Handle the case when trips is an empty array
          setTrips([]);
          setCenterCoord(null); // You can set this to a default value
        }
      })
      .catch((error) => {
        // Handle any fetch errors here
        console.error('Fetch error:', error);
      });
  }, [id]);

  return { trips, centerCoord };
};