import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useTimeLine } from './useTimeLine';
import { useSchedule } from './useSchedule';
import { Days } from './Days';
import { ScheduleTimeLine } from "./ScheduleTimeLine"
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

export const Schedule = (props) => {
  const { id } = useParams();
  const { schedule, dates, handleSetDay, currentDay, totalDays } = useSchedule({ id });
  const { start_date, end_date } = schedule || {};
  const { data } = useTimeLine({ id, date: dates[currentDay] });

  /* Open up overlay */
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const page_heading = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    color: 'rgb(58, 57, 57)',
    borderBottom: '5px solid black',
  };

  const schedule_heading = {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center'
  };

  const travel_dates = {
    color: 'rgb(58, 57, 57)',
    display: 'flex',
    justifyContent: 'center'
  };

  const overlay = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const placePopup = {
    background: 'white',
    padding: '20px',
    borderRadius: '4px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'

  }

  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
    <Navigation />
    <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Header />

    <div className="body">

      <div>
        <button onClick={openPopup}>Open Popup</button>
        {isPopupOpen && (
          <div style={overlay}>
            <div style={placePopup}>
              <Place onClose={closePopup} />
            </div>
          </div>
        )}
      </div>

      <title >Vancouver</title>
      <div id="root"></div>

      <div style={page_heading}>
        <h1>Vancouver</h1>
        <div style={schedule_heading}>
          <h2 style={{marginRight: 0.5 + 'em'}}>DAY:</h2>
            <Days  
              daysCount={totalDays} 
              handleChange={handleSetDay} 
              currentDay={currentDay + 1}
            />
        </div>
      </div>
      <h2 style={travel_dates}>
       {start_date ? `${start_date} ~ ${end_date}` :  'Loading...'}
      </h2>

      <section className="itinerary_day">
        <Button fullWidth={true} sx={{ fontSize: '50px' }} href="#" size="small"><i className="bi bi-plus"></i></Button>
    
        <ScheduleTimeLine
         data={data}
         className="schedule_card"
        />
        
      </section>
      </div>

    </div>
    </div>
    </>
  );

}

// travel time - random math time give it 15min, 30min, 45min, etc.