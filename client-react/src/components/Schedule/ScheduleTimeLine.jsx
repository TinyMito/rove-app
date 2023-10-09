import { useState, useCallback } from 'react';
import { TripItem } from './TripItem';

// Timeline
import Timeline from '@mui/lab/Timeline';
import { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';

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

export const ScheduleTimeLine = (props) => {

  const { data, deleteTrip, handleFetchTrips, updateTrip } = props

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
  const handlePlaceCardOpen = useCallback((placeId) => {
    setPlaceModalProps({
      isOpen: true,
      placeId
    });
    //console.log('placeId', placeId);
  }, []);

  const handlePlaceCardClose = useCallback(() => {
    setPlaceModalProps(defaultPlaceModalProps);
  }, []);


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
              placeId={placeModalProps.placeId}
            />
          </>
        )}
        {/* Item */}
        {data.map((trip) => (
        <TripItem
          // let's see if it will still work.
          handleDeleteModalOpen={handleDeleteModalOpen}
          handleDeleteClose={handleDeleteModalClose}
          handleConfirm={handleDelete}
          handlePlaceCardOpen={handlePlaceCardOpen}
          handlePlaceClose={handlePlaceCardClose}
        
        // above are added by me 7:20pm
          key={trip.trip_id}
          trip={trip}
          handleFetchTrips={handleFetchTrips}
          updateTrip={updateTrip}
        />
        ))}
        
      </Timeline>
    </div>
  );
};