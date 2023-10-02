import { useState, useEffect, useCallback } from 'react';

export const useTimeLine = ({ id, date }) => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   setData(mockData[date])
  // }, [date]);
  useEffect(() => {
    fetch(`api/trip?scheduleId=${id}&date=${date}`)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        setData(response)
      })
  }, [id, date])
  return { data };
};

