import { useState, useEffect, useCallback } from 'react';
import { daysArray } from './utils';

export const useSchedule = ({ id }) => {
  const [schedule, setSchedule] = useState(null);
  const [dates, setDates] = useState([]); // 
  const [currentDay, setCurrentDay] = useState(0);

  useEffect(() => {
    fetch(`/api/schedule/${id}`)
      .then((response) => response.json())
      .then((response) => {
        const newSchedule = response[currentDay];
        setSchedule(newSchedule);

        // Assuming start_date and end_date are properties of newSchedule
        const start_date = newSchedule.start_date;
        const end_date = newSchedule.end_date;

        // Pass start_date and end_date to daysArray
        setDates(daysArray(start_date, end_date));
      });
  }, [id]);

  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((response) => {
  //       const newSchedule = response[0];
  //       setSchedule(newSchedule)
  //       setDates(daysArray(start_date, end_date))

  //     })
  // }, [id, start_date, end_date])

  const handleSetDay = useCallback((event, dayIndex) => {
    setCurrentDay(dayIndex - 1);
  }, []);

  return { schedule, dates, handleSetDay, currentDay, totalDays: dates.length };
};

