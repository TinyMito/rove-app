// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';
import { Link } from "react-router-dom";

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// DATA: Import GlobalData function
import { globalData } from '../../GlobalData';

// User CSS
import '../../styles/User.scss'

// Layout
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';
//import ModalPlace from './ModalPlace';

// Components for User
import TripSuggestion from './TripSuggestion';

export default function User() {

  // DATA: Add the useState const from globalData, ie. userData.id, userData.firstname etc
  const { userData, setUserData } = globalData();

  // Get url id parameter
  const [suggestedTrips, setSuggestedTrips] = useState([]);
  const [modalOpen, setModalOpen] = useState(false); // Modal state
  const [selectedTripId, setSelectedTripId] = useState(null); // Store selected trip ID
  
  // user data 
  useEffect(() => {
    axios.get(`/api/user/1`)
      .then((res) => {
        setSuggestedTrips(res.data.suggestedTrip);
      })
      .catch((err) => {
        setSuggestedTrips({ error: err.message });
      });
  }, []);

  function randomPicker(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const selectedTrips = randomPicker(suggestedTrips).slice(0,12);

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
      <Navigation userImg={userData.userImg} />
          <div className="flex-column">
          <Header userName={userData.userFirst} />

              <div className="body">

                <h1>Explore Today!</h1>
                <div className="box-design-03">
                <div className="item-list">
                  {selectedTrips.map((item, index) => {
                    const selectedTripsKey = `selectedTrips_${index}`;
                    return (
                      <TripSuggestion 
                        key={selectedTripsKey} 
                        data={item}
                        userData={userData}
                        setUserData={setUserData}
                        /* openModal={openModal} */
                      />                    
                    );
                   })}
                </div>
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