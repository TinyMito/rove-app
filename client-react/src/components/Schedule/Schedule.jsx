import { useEffect, useCallback } from 'react';
import { Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useTimeLine } from './useTimeLine';
import { useSchedule } from './useSchedule';
import { Days } from './Days';
import { ScheduleTimeLine } from "./ScheduleTimeLine";
import './Schedule.css'; // Import the CSS file
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

// GLOBAL DATA: Import GlobalData function
import { globalData } from '../../GlobalData';

export const Schedule = () => {
  const navigate = useNavigate();
  
  const { userData, setUserData } = globalData();
  
  const { id } = useParams();
  const { schedule, dates, handleSetDay, currentDay, totalDays, destination, googleDestinationId } = useSchedule({ id });

  const handleNavigate = useCallback(() => {
    navigate(`/card/${destination}/${googleDestinationId}`);
  }, [destination, googleDestinationId]);

  const { schedule_id, start_date, end_date } = schedule || {};
  const { data, deleteTrip, handleFetchTrips, updateTrip } = useTimeLine({ id, date: dates[currentDay] });

  useEffect(() => {
    if (schedule && !userData.scheduleId) {
      setUserData((prev) => {
        return {
          ...prev,
          scheduleId: schedule_id,
          scheduleStartDate: start_date,
          scheduleEndDate: end_date,
          destinationId: null
        }
      })
    } 
  }, [schedule, userData.scheduleId]);

  return (
    <div className="box"> 
      <div className="flex-row">
        <Navigation loggedIn={userData.loggedIn} userId={userData.id} userImg={userData.userImg} />
        <div className="flex-column">
          <Header 
            userName={userData.userName}
            slogan={destination}
            date={start_date ? `${start_date} ~ ${end_date}` :  'Loading...'}
          />
          <div className="body">
            <title>{destination}</title>
            <div id="root"></div>
            <div className="page-heading-schedule">
              <h2 className="schedule-current-date">{dates[currentDay]}</h2>
              <div className="schedule-heading">
                <h2 style={{ marginRight: '0.5em', fontSize: '2em' }}>DAY:</h2>
                <Days
                  className="schedule-pagination"
                  daysCount={totalDays}
                  handleChange={handleSetDay}
                  currentDay={currentDay + 1}
                />
              </div>
            </div>
            <section className="itinerary-day">
              <Button 
              fullWidth={true} 
              sx={{ fontSize: '50px' }}
              onClick={handleNavigate}
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