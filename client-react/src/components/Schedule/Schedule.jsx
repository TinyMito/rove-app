import { useEffect, useCallback } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { useParams, useNavigate } from 'react-router-dom';
import { useTimeLine } from './useTimeLine';
import { useSchedule } from './useSchedule';
import { Days } from './Days';
import { ScheduleTimeLine } from "./ScheduleTimeLine";
import './Schedule.css'; // Import the CSS file
import { useAuthentication } from 'useAuthentication';
import FloatButton from 'components/partials/FloatButton';

// GLOBAL DATA: Import GlobalData function
import { globalData } from '../../GlobalData';
// Nav and Header
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

//

export const Schedule = () => {
  // Requires the user to be logged in
  const isAuthenticated = useAuthentication();

  const navigate = useNavigate();
  
  const { userData, setUserData } = globalData();
  
  const { id } = useParams();
  const { schedule, dates, handleSetDay, currentDay, totalDays, destination, googleDestinationId } = useSchedule({ id });

  const { schedule_id, start_date, end_date } = schedule || {};
  const { data, deleteTrip, handleFetchTrips, updateTrip } = useTimeLine({ id, date: dates[currentDay] });

  const handleNavigate = useCallback(() => {
    setUserData({ ...userData, scheduleId: schedule_id, scheduleStartDate: start_date, scheduleEndDate: end_date })
    navigate(`/card/${destination}/${googleDestinationId}`);
  }, [destination, googleDestinationId]);

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

  // Tooltip
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#fff',
        color: '#9399B4',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)',
        fontSize: '1.5em',
        borderRadius: '7px'
      },
  }));

  return (
    <div className="box"> 
      <div className="flex-row">
      <Navigation isAuthenticated={isAuthenticated} userImg={userData.userImg} />
        <div className="flex-column">
        <Header isAuthenticated={isAuthenticated} userName={userData.userFirst} slogan={destination} date={start_date ? `${start_date} ~ ${end_date}` :  'Loading...'}>
        </Header>
        <FloatButton scheduleId={id} />
          <div className="body">
            <title>{destination}</title>
            <div id="root"></div>

            <div className="page-heading-schedule">
              <div className="schedule-current-date">{dates[currentDay]}</div>
              <div className="schedule-heading">
                <div className="schedule-heading-day">DAY <i className="bi bi-arrow-right-short"></i> </div>
                <Days
                  className="schedule-pagination"
                  daysCount={totalDays}
                  handleChange={handleSetDay}
                  currentDay={currentDay + 1}
                />
              </div>
            </div>

            <section className="itinerary-day">
              <LightTooltip title="Add Attractions">
                <Button 
                fullWidth={true} 
                sx={{ fontSize: '50px' }}
                onClick={handleNavigate}
                size="small">
                  <i className="bi bi-plus"></i>
                </Button>
              </LightTooltip>
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