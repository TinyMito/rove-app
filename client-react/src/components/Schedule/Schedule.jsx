import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useTimeLine } from './useTimeLine';
import { useSchedule } from './useSchedule';
import { Days } from './Days';
import { ScheduleTimeLine } from "./ScheduleTimeLine";
import './Schedule.css'; // Import the CSS file
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

export const Schedule = (props) => {
  const { id } = useParams();
  const { schedule, dates, handleSetDay, currentDay, totalDays, destination } = useSchedule({ id });
  const { start_date, end_date } = schedule || {};
  const { data, deleteTrip, handleFetchTrips, updateTrip } = useTimeLine({ id, date: dates[currentDay] });

  return (
    <div className="box">
      <div className="flex-row">
        <Navigation />
        <div className="flex-column">
          <Header />
          <div className="body">
            <title>{destination}</title>
            <div id="root"></div>
            <div className="page-heading">
              <h1>{destination}</h1>
              <div className="schedule-heading">
                <h2 style={{ marginRight: '0.5em' }}>DAY:</h2>
                <Days
                  daysCount={totalDays}
                  handleChange={handleSetDay}
                  currentDay={currentDay + 1}
                />
              </div>
            </div>
            <h2 className="travel-dates">
              {start_date ? `${start_date} ~ ${end_date}` :  'Loading...'}
            </h2>
            <section className="itinerary_day">
              <Button 
              fullWidth={true} 
              sx={{ fontSize: '50px' }} 
              href={`/card/:location/${props.place_id}`}
              size="small">
                <i className="bi bi-plus"></i>
              </Button>
              <ScheduleTimeLine
                data={data}
                deleteTrip={deleteTrip}
                handleFetchTrips={handleFetchTrips}
                updateTrip={updateTrip}
                className="schedule-card"
              />
            </section>
           </div>
        </div>
      </div>
    </div>
  );

}

{/* // travel time - random math time give it 15min, 30min, 45min, etc. */}