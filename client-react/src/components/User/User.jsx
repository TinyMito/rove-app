// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuthentication } from 'useAuthentication';

// DATA: Import GlobalData function
import { globalData } from '../../GlobalData';

// User CSS
import '../../styles/User.scss'

// Layout
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';
import ModalPlace from './ModalPlace';

// Components for User
import MyScheduleList from './MyScheduleList';
import TripSuggestion from './TripSuggestion';

export default function User() {
  // Requires the user to be logged in
  const isAuthenticated = useAuthentication();

  // DATA: Add the useState const from globalData, ie. userData.id, userData.firstname etc
  const { userData, setUserData } = globalData();

  // Get url id parameter
  const [schedules, setScheduleList] = useState([]);
  const [suggestedTrips, setSuggestedTrips] = useState([]);
  const [modalOpen, setModalOpen] = useState(false); // Modal state
  const [selectedTripId, setSelectedTripId] = useState(null); // Store selected trip ID
  
  // user data 
  useEffect(() => {
    if (userData.id) {
      axios.get(`/api/user/${userData.id}`)
        .then((res) => {
          setScheduleList(res.data.schedule);
          setSuggestedTrips(res.data.suggestedTrip);
        })
        .catch((err) => {
          setScheduleList({ error: err.message });
          setSuggestedTrips({ error: err.message });
        });
    }
  }, [userData.id]);

  function randomPicker(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const selectedTrips = randomPicker(suggestedTrips).slice(0,4);

  // Open Modal
  const openModal = (tripId) => {
    setSelectedTripId(tripId);
    setModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setSelectedTripId(null);
    setModalOpen(false);
  };

  return (
    <div className="box">
      <div className="flex-row">
      <Navigation isAuthenticated={isAuthenticated} userImg={userData.userImg} />
          <div className="flex-column">
          <Header isAuthenticated={isAuthenticated} userName={userData.userFirst} />

              <div className="body">
                <h2>Username: {userData.userName}</h2>

                <div className="page-heading"><h1>Destination Suggestion</h1></div>
                <div className="item-list">
                  {selectedTrips.map((item) => (
                    <TripSuggestion 
                      key={item.id} 
                      data={item}
                      /* openModal={openModal} */
                    />
                  ))}
                </div>
                <div className="page-heading"><h1>My Schedule</h1></div>
                  <div className="item-list">
                    {schedules.map((item) => (
                      <MyScheduleList 
                        key={item.id} 
                        schedule={item}
                      />
                    ))}
                  </div>
              </div>
          </div>
        </div>

        {modalOpen && (
          <ModalPlace placeId={selectedTripId} handleClose={closeModal} />
        )}
    </div>
  );
}