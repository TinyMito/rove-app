import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useTimeLine } from './useTimeLine';
import { useSchedule } from './useSchedule';
import { Days } from './Days';
import { ScheduleTimeLine } from "./ScheduleTimeLine";
import './Schedule.css'; // Import the CSS file
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

// GLOBAL DATA: Import GlobalData function
import { globalData } from '../../GlobalData';
import { replaceSpacesWithPercent20 } from './utils';

export const Schedule = (props) => {

  
  const { userData, setUserData } = globalData();
  const changeUser = (newUserId) => {
    setUserData({ ...userData, id: newUserId });
  };
  
  const { id } = useParams();
  const { schedule, dates, handleSetDay, currentDay, totalDays, destination, googleDestinationId } = useSchedule({ id });
  const { start_date, end_date } = schedule || {};
  const { data, deleteTrip, handleFetchTrips, updateTrip } = useTimeLine({ id, date: dates[currentDay] });
  
  console.log('destination');
  console.log('googleDestinationId', 'googleDestinationId')
  const destinationNameFormatted = replaceSpacesWithPercent20(googleDestinationId);

  return (
    <div className="box">
      <div className="flex-row">
        <Navigation />
        <div className="flex-column">
          <Header />
          <div className="body">
            <title>{destination}</title>
            <div id="root"></div>
            <div className="page-heading-schedule">
              <h1>{destination}</h1>
              <div className="schedule-heading">
                <h2 style={{ marginRight: '0.5em', fontSize: '2em' }}>DAY:</h2>
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
            <section className="itinerary-day">
              <Button 
              fullWidth={true} 
              sx={{ fontSize: '50px' }} 
              href={`/card/${destination}/${googleDestinationId}`}
              size="small">
                <i className="bi bi-plus"></i>
              </Button>
              <div className="schedule-card-wrapper">
                <ScheduleTimeLine
                  data={data}
                  deleteTrip={deleteTrip}
                  handleFetchTrips={handleFetchTrips}
                  updateTrip={updateTrip}
                  className="schedule-card"
                />
              </div>
            </section>
           </div>
        </div>
      </div>
    </div>
  );
}

{/* // travel time - random math time give it 15min, 30min, 45min, etc. */}