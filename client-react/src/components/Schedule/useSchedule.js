import { useState, useEffect, useCallback } from 'react';

export const useSchedule = ({ id }) => {
  const [schedule, setSchedule] = useState(null);
  const [dates, setDates] = useState([]);
  const [currentDay, setCurrentDay] = useState(0);

  useEffect(() => {
    fetch(`/api/schedule/${id}`)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        const newSchedule = response[0];
        setSchedule(newSchedule)
        setDates([newSchedule.start_date, newSchedule.end_date])
      })
  }, [id])

  const handleSetDay = useCallback((event, dayIndex) => {
    setCurrentDay(dayIndex - 1);
  }, []);

  return { schedule, dates, handleSetDay, currentDay, totalDays: dates.length };
};

