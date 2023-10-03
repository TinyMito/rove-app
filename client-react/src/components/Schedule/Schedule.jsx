import { useParams } from 'react-router-dom';
import { useTimeLine } from './useTimeLine';
import { useSchedule } from './useSchedule';

import { Days } from './Days';

// Timeline
import { ScheduleTimeLine } from "./ScheduleTimeLine"

export const Schedule = (props) => {
  const { id } = useParams();
  
  const { schedule, dates, handleSetDay, currentDay, totalDays } = useSchedule({ id });
  const { start_date, end_date } = schedule || {};

  const { data } = useTimeLine({ id, date: dates[currentDay] });

 
  
  return (
    <div>
      <title >Vancouver</title>
      <div id="root"></div>

      <h1 className="trip_location">Vancouver</h1>
     
      <h3>Day</h3>
        <Days  
          daysCount={totalDays} 
          handleChange={handleSetDay} 
          currentDay={currentDay}
        />
      <h3 className="travel_dates">
       {start_date ? `${start_date} - ${end_date}` :  'Loading...'}
      </h3>
      {/* pagination */}
      
      <div className="timeline" />

      <section className="itinerary_day">
        <div className="add">
          <button><i className="bi bi-plus"></i></button>
        </div>

    
        <ScheduleTimeLine
         data={data}
        />
        
        {/* <div>
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
        </div> */}
      </section>
      </div>
  );

}

// travel time - random math time give it 15min, 30min, 45min, etc.