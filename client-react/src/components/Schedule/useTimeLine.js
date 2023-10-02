import { useState, useEffect, useCallback } from 'react';

// mock data
const mockData = {
  '2023-09-28': [
    {
      id: 1,
      place_id: 1,
      destination_id: 1,
      user_id: 1,
      start_date: '2023-09-28',
      end_date: '2023-09-30',
      start_time: '08:00',
      end_time: '09:00'
    },
    {
      id: 2,
      place_id: 2,
      destination_id: 1,
      user_id: 1,
      start_date: '2023-09-28',
      end_date: '2023-09-30',
      start_time: '09:00',
      end_time: '10:00'
    },
    {
      id: 3,
      place_id: 3,
      destination_id: 1,
      user_id: 1,
      start_date: '2023-09-28',
      end_date: '2023-09-30',
      start_time: '10:00',
      end_time: '12:00'
    }
  ],
  '2023-09-29': [
    {
      id: 4,
      place_id: 2,
      destination_id: 1,
      user_id: 1,
      start_date: '2023-09-28',
      end_date: '2023-09-30',
      start_time: '12:00',
      end_time: '1:00'
    },
    {
      id: 5,
      place_id: 1,
      destination_id: 1,
      user_id: 1,
      start_date: '2023-09-28',
      end_date: '2023-09-30',
      start_time: '1:00',
      end_time: '2:00'
    },
    {
      id: 6,
      place_id: 3,
      destination_id: 1,
      user_id: 1,
      start_date: '2023-09-28',
      end_date: '2023-09-30',
      start_time: '2:00',
      end_time: '5:00'
    }
  ],
  '2023-09-30': [
    {
      id: 7,
      place_id: 4,
      destination_id: 1,
      user_id: 1,
      start_date: '2023-09-28',
      end_date: '2023-09-30',
      start_time: '1:00',
      end_time: '2:00'
    },
    {
      id: 8,
      place_id: 5,
      destination_id: 1,
      user_id: 1,
      start_date: '2023-09-28',
      end_date: '2023-09-30',
      start_time: '2:00',
      end_time: '3:00'
    }
  ]
};
/////////////////////////////////////////////////////////

export const useTimeLine = ({ id, date }) => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   setData(mockData[date])
  // }, [date]);
  useEffect(() => {
    // Use an async function to fetch data and handle the response
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/trip/${id}?date=${date}`, {
          method: 'GET', // GET request to fetch schedule data
          // mode: 'no-cors'
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const tripsData = await response.json();
        setData(tripsData); // update the state with the fetched data
      } catch (error) {
        console.error('Error fetching data for trips', error);
        console.error('Response status:', response.status);
        console.error('Response status text:', response.statusText);
      }
    }
    fetchData(); // call the fetchData function
  }, [id, date])
  return { data };
};

  // .then((response) => {
  //       console.log(response);
  //     })
  // }, []);
  // return {
  //   data
  // };


