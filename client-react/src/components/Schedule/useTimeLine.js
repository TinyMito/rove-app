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
  return { data };
};

