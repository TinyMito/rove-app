import { useParams } from 'react-router-dom';
import { useTimeLine } from './useTimeLine';
import { useSchedule } from './useSchedule';
import { Days } from './Days';
import { ScheduleTimeLine } from "./ScheduleTimeLine"

import './Schedule.css';


export const Schedule = (props) => {
  const { id } = useParams();
  const { schedule, dates, handleSetDay, currentDay, totalDays } = useSchedule({ id });
  const { start_date, end_date } = schedule || {};
  const { data } = useTimeLine({ id, date: dates[currentDay] });


  return (
    <div className="body">
      <title >Vancouver</title>
      <div id="root"></div>

      <div className="page_heading">
        <h1 className="trip_location">Vancouver</h1>
        <div className="schedule_heading">
          <h2 style={{marginRight: 0.5 + 'em'}}>DAY:</h2>
            <Days  
              daysCount={totalDays} 
              handleChange={handleSetDay} 
              currentDay={currentDay + 1}
            />
        </div>
      </div>
      <h2 className="travel_dates">
       {start_date ? `${start_date} ~ ${end_date}` :  'Loading...'}
      </h2>
      
      
      <div className="timeline" />

      <section className="itinerary_day">
        <div className="add">
          <button><i className="bi bi-plus"></i></button>
        </div>

    
        <ScheduleTimeLine
         data={data}
         className="schedule_card"
        />
        
      </section>
      </div>
  );

}

// travel time - random math time give it 15min, 30min, 45min, etc.