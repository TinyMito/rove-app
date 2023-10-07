import { useState, useCallback } from 'react';

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
import ModalDelete from './ModalDelete';
import ModalPlace from './ModalPlace';


const defaultDeleteModalProps = {
  isOpen: false,
  tripId: undefined
};

const defaultPlaceModalProps = {
  isOpen: false,
  placeId: undefined
};

export const ScheduleTimeLine = (prop) => {

  const { data, deleteTrip } = prop

  const [deleteModalProps, setDeleteModalProps] = useState(defaultDeleteModalProps);
  const [darkBGClass, setDarkBGClass] = useState('');

  const handleDeleteModalOpen = useCallback((tripId) => {
    setDarkBGClass('darkBG');
    setDeleteModalProps({
      isOpen: true,
      tripId
    });
  }, []);

  const handleDeleteModalClose = useCallback(() => {
    setDarkBGClass('');
    setDeleteModalProps(defaultDeleteModalProps)
  }, []);


  const handleDelete = useCallback(() => {
    if (deleteModalProps.tripId) {
      deleteTrip(deleteModalProps.tripId);
    }  
  }, [deleteModalProps.tripId]);

  
  const [placeModalProps, setPlaceModalProps] = useState(defaultPlaceModalProps);
  const handlePlaceCardOpen = (placeId) => {
    setPlaceModalProps({
      isOpen: true,
      placeId
    });
  };
  const handlePlaceCardClose = () => {
    setPlaceModalProps(defaultPlaceModalProps);
  };


  return (
    <div className={darkBGClass}>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
        > 
        {/* <div className='darkBG'/> */}
        {deleteModalProps.isOpen && (
          <>
            <ModalDelete
              handleOpen={handleDeleteModalOpen}
              handleClose={handleDeleteModalClose}
              handleConfirm={handleDelete}
              confirmMessage={"Delete"}
            />
          </>
        )}
        {placeModalProps.isOpen && (
          <>
            <ModalPlace
              handleOpen={handlePlaceCardOpen}
              handleClose={handlePlaceCardClose}
              placeId={placeModalProps.place_id}
            />
          </>
        )}
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
                onClick={() => handlePlaceCardOpen(trip.place_id)}
              />
              
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
                  onClick={() => {
                    handleDeleteModalOpen(trip.trip_id);
                  }} 
                >
                  <DeleteIcon/>
                </IconButton>
                
              </CardActions>
            </Card>

          </TimelineContent>
        </TimelineItem>
        ))}
        
      </Timeline>
    </div>
  );
};