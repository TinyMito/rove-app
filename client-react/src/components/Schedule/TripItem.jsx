import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Timeline
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

// card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// button
import IconButton from '@mui/material/IconButton';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

// Timpicker
import TimePicker from './TimePicker';

// UserNote
import UserNote from './UserNote';

export const TripItem = ({
  trip, 
  handleFetchTrips, 
  updateTrip, 
  handlePlaceCardOpen,
  handleDeleteModalOpen, 
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (newUserNote) => {
    setIsEditing(false);
    updateTrip(trip.trip_id, null, newUserNote);
  }

  const timeSchedule = {
    display: 'flex',
    flexDirection: 'column',
    verticalAlign: 'middle'
  }

  const navigate = useNavigate();

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
    <TimelineItem 
      key={trip.trip_id}
      sx={{ padding: -1 }}
    >
      <TimelineOppositeContent color="textSecondary" sx={{ fontSize: 25 }} >
        <div style={timeSchedule}>
        <TimePicker 
          onSubmit={handleFetchTrips}
          startTime={trip.start_time}
          tripId={trip.trip_id}
          updateTrip={updateTrip}
        />
        </div>
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
            image={trip.attraction_photo_url}              
            style={{ cursor: 'pointer'}}
            onClick={() => handlePlaceCardOpen(trip.place_id)}
          />
          
          <CardContent className="card_content">
            <Typography className="trip_name" gutterBottom variant="h4" component="div">
              {trip.name}
            </Typography>
            <Typography 
              component={'div'}
              variant="body2" color="text.secondary"
              className="usernote-schedule-page"
            >
              <UserNote
                userNote={trip.user_note}
                tripId={trip.trip_id}
                onSubmit={handleSubmit}
              />
            </Typography>
          </CardContent>

          <CardActions className="card-actions-schedule">  
          <LightTooltip title="Open Map">             
            <IconButton 
              className="icon_buttons" aria-label="mapIcon" size="large"
              tripname={trip.name}
              onClick={() => navigate(`/map?lng=${trip.longitude}&lat=${trip.latitude}&tripname=${trip.name}`)}
            >
              <MapOutlinedIcon />
            </IconButton>
            </LightTooltip>
            <LightTooltip title="Delete">
            <IconButton 
              className="icon_buttons" 
              aria-label="delete" 
              size="large"
              onClick={() => {
                handleDeleteModalOpen(trip.trip_id);
              }} 
            >
              <DeleteIcon/>
            </IconButton>
            </LightTooltip>
            
          </CardActions>
        </Card>

      </TimelineContent>
    </TimelineItem>
  )
}