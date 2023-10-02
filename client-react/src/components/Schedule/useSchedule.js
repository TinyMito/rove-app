import { useState, useEffect } from 'react';

export const useSchedule = ({ id }) => {
  const [schedule, setSchedule] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    fetch(`api/schedule/${id}`)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        setSchedule(response)

      })
  }, [id])

  return { schedule };
};

