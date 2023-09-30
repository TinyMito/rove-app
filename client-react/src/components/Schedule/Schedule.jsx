import React, { useState } from 'react';
import { useTimeLine } from './useTimeLine';

// Pagination
import Pagination from '@mui/material/Pagination';
import { Days } from './Days';

// Timeline
import { ScheduleTimeLine } from "../Itinerary/ScheduleTimeLine"

const hardCodedDayObj = [
  {
    siteName: 'Stanley Park',
    note: 'A historic hotel in Vancouver.'
  },
  {
    siteName: 'Fairmont Hotel',
    note: 'A historic hotel in Vancouver.'
  },
]

const dates = ['2023-09-28', '2023-09-29', '2023-09-30'];

export const Schedule = (props) => {
  
  const [day, setDay] = useState(1)
  const [dayObj, setDayObj] = useState(hardCodedDayObj)

  const { data } = useTimeLine({date:dates[day - 1]})
  console.log('data[0]', data[0]);
  console.log('data.length', data.length);

  const startDateStr = data[0]?.start_date;
  const endDateStr = data[0]?.end_date;

  const handleSetDay = (event, selectedDay) => {
    setDay(selectedDay);
  }
  return (
    <div>
      <title >Vancouver</title>
      <div id="root"></div>

      <h1 className="trip_location">Vancouver</h1>
     
      <h3>Day</h3>
        <Days  
          daysCount={dates.length} 
          handleChange={handleSetDay} 
          currentDay={day}
        />
      <h3 className="travel_dates">
       {startDateStr ? `${startDateStr} - ${endDateStr}` :  'Loading...'}
      </h3>
      {/* pagination */}
      
      <div className="timeline" />

      <section className="itinerary_day">
        <div className="add">
          <button><i className="bi bi-plus"></i></button>
        </div>


        {/* <ScheduleTimeLine
          dayObj={data}
        /> */}
        
        <div>
          { data.map((elem)=> {
            return (
              <div key={elem.id}>
                {elem.id},
                {elem.place_id},
                {elem.destination_id},
                {elem.start_date},
                {elem.end_date},
                {elem.start_time},
                {elem.end_time}
              </div>
            )

          })}
        </div>
      </section>
      </div>
  );

}

// travel time - random math time give it 15min, 30min, 45min, etc.