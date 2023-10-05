import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useTimeLine } from './useTimeLine';
import { useSchedule } from './useSchedule';
import { Days } from './Days';
import { ScheduleTimeLine } from "./ScheduleTimeLine"
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

import Modal from './Modal'; // Add for delete modal
import Place from '../Place/Place'; // Add for modal popup Place component

export const Schedule = (props) => {
  const { id } = useParams();
  const { schedule, dates, handleSetDay, currentDay, totalDays } = useSchedule({ id });
  const { start_date, end_date } = schedule || {};
  const { data, deleteTrip } = useTimeLine({ id, date: dates[currentDay] });

  // 1. GET and SET Trip ID for DELETION
  const [tripId, setTripId] = useState();

  // useState for Modal 
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);

  const openDeleteConfirmation = () => {
    setIsDeleteOpen(true);
  };

  const closeDeleteConfirmation = () => {
    setIsDeleteOpen(false);
  };

  const openPlaceCard = () => {
    setIsCardOpen(true);
  };

  const closePlaceCard = () => {
    setIsCardOpen(false);
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

  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
    <Navigation />
    <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Header />
    <div className="body">
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
         deleteTrip={deleteTrip}
         className="schedule_card"
         openPlaceCard={openPlaceCard} // Add by Kevin: pass useState openCard to ScheduleTimeLine Component
         openDeleteConfirmation={openDeleteConfirmation} // 2. Pass the Function into ScheduleTimeLine Delete Button
         onTripId={setTripId} // 3. Get the tripId back from ScheduleTimeline.jsx
        />
 
      </section>
      </div>

    </div>
    </div>
    {isDeleteOpen && (
      <div className="overlay">
        <div className="placePopup">
          <Modal 
            closeDeleteConfirmation={closeDeleteConfirmation} // 6. Pass the Function into Modal button
            deleteTrip={deleteTrip} // 7. Pass the Function into Modal button as well for useTimeLine.js query
            tripId={tripId} // 8. Pass the selected tripID to be delete into the Modal
          />
        </div>
      </div>
    )}

    {isCardOpen && (
      <div className="overlay">
        <div className="placePopup">
          <Place closePlaceCard={closePlaceCard} />
        </div>
      </div>
    )}
    </>
  );

}

// travel time - random math time give it 15min, 30min, 45min, etc.