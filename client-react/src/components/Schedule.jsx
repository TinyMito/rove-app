import React, { useState } from 'react';

// Pagination
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// Date Range Picker
import CalendarPop from "./shared/CalendarPop";

// Timeline
import Timeline from "./Itinerary/Timeline"

export default function Schedule() {

  const [checkInDate, setCheckInDate] = useState(null) 
  const [checkOutDate, setCheckOutDate] = useState(null) 

  return (
    <div>
      <title>Vancouver</title>
      <div id="root"></div>

      <h1 className="trip_location">Vancouver</h1>
      {/* <Date Range Picker/> */}
      <h3 className="travel_dates">
        <CalendarPop
          checkInDate={checkInDate}
          setCheckInDate={setCheckInDate}
          checkOutDate={checkOutDate}
          setCheckOutDate={setCheckOutDate}
        />
      </h3>
      {/* pagination */}
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
      <div className="timeline" />

      <section className="itinerary_day">
        <div className="add">
          <a ><i className="bi bi-plus"></i></a>
        </div>


        <Timeline/>

      </section>
      </div>
  );

}
