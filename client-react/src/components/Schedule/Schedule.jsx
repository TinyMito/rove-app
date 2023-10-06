import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useTimeLine } from './useTimeLine';
import { useSchedule } from './useSchedule';
import { Days } from './Days';
import { ScheduleTimeLine } from "./ScheduleTimeLine";
import './Schedule.css'; // Import the CSS file

export const Schedule = (props) => {
  const { id } = useParams();
  const { schedule, dates, handleSetDay, currentDay, totalDays } = useSchedule({ id });
  const { start_date, end_date } = schedule || {};
  const { data, deleteTrip } = useTimeLine({ id, date: dates[currentDay] });

  return (
    <div className="body">
      <title >Vancouver</title>
      <div id="root"></div>
      <div className="page-heading">
        <h1>Vancouver</h1>
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
        <Button fullWidth={true} sx={{ fontSize: '50px' }} href="#" size="small">
          <i className="bi bi-plus"></i>
        </Button>

        <ScheduleTimeLine
          data={data}
          deleteTrip={deleteTrip}
          className="schedule-card"
        />
      </section>
    </div>
  )
};