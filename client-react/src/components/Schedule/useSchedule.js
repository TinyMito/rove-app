import { useState, useEffect, useCallback } from 'react';
import { daysArray } from './utils';

export const useSchedule = ({ id }) => {
  const [schedule, setSchedule] = useState(null);
  const [dates, setDates] = useState([]); // 
  const [currentDay, setCurrentDay] = useState(0);
  const [destination, setDestination] = useState('');
  const [googleDestinationId, setGoogleDestinationId] = useState('');

  useEffect(() => {
    fetch(`/api/schedule/${id}`)
      .then((response) => response.json())
      .then((response) => {
        const newSchedule = response[0]; // response always comes back in an array with just one element.
        setSchedule(newSchedule);

        // Assuming start_date and end_date are properties of newSchedule
        const start_date = newSchedule.start_date;
        const end_date = newSchedule.end_date;
        const destination_name = newSchedule.destination_name;
        const google_destination_id = newSchedule.google_destination_id;

        // Pass start_date and end_date to daysArray
        setDates(daysArray(start_date, end_date));
        setDestination(destination_name);
        setGoogleDestinationId(google_destination_id);
        console.log('schedule', newSchedule)
      });
  }, [id]);

  const handleSetDay = useCallback((event, dayIndex) => {
    setCurrentDay(dayIndex - 1);
  }, []);

  return { schedule, dates, handleSetDay, currentDay, totalDays: dates.length, destination, googleDestinationId };
};

