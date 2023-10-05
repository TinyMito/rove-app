import { useState } from 'react';

// Timeline
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

// card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// button
import IconButton from '@mui/material/IconButton';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

import ScheduleCard from './ScheduleCard';
import Detail from '../Place/Place';

// Modal
import Modal from './Modal';

export const ScheduleTimeLine = (prop) => {

  const { data, deleteTrip } = prop

  const [isOpen, setIsOpen] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };


  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <div className={isOpen? 'darkBG': ''} />
      <div>
        {isOpen && <Modal setIsOpen={setIsOpen} />}'
      </div>
      {/* Item */}
      {data.map((trip) => (
      <TimelineItem 
        key={trip.trip_id}
        sx={{ padding: -1 }}
      >
        <TimelineOppositeContent color="textSecondary" sx={{ fontSize: 25 }}>
          {trip.start_time}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {/* import schedule card */}
          <Card sx={{ maxWidth: 800 }} className="card_schedule">
            <CardMedia
              component="img"
              alt={trip.name}
              height="400"
              image={trip.cover_photo_url}              
              style={{ cursor: 'pointer'}}
            />
            {isOpen && <Modal setIsOpen={setIsOpen} />}
            <CardContent className="card_content">
              <Typography className="trip_name" gutterBottom variant="h4" component="div">
                {trip.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {trip.user_note}
                <span />
                <a><i className="bi bi-pencil" /></a>
              </Typography>
            </CardContent>

            <CardActions className="card_actions">
              
              <IconButton className="icon_buttons" aria-label="mapIcon" size="large">
                <MapOutlinedIcon />
              </IconButton>
              {/* <Button size="small"><i className="bi bi-trash"></i></Button> */}
              <IconButton 
                className="icon_buttons" 
                aria-label="delete" 
                size="large"
                onClick={() => deleteTrip(trip.trip_id)} 
              >
                <DeleteIcon
                  onClick={() => setIsOpen(true)}
                />
              </IconButton>
            </CardActions>
          </Card>

        </TimelineContent>
      </TimelineItem>
      ))}

    </Timeline>
  );
};