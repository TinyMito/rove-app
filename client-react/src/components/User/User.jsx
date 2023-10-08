// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
  // DATA: Add the useState const from globalData, ie. userData.id, userData.firstname etc
  const { userData, setUserData } = globalData();

  // Get url id parameter
  //const { id } = useParams();
  const [schedules, setScheduleList] = useState([]);
  const [suggestedTrips, setSuggestedTrips] = useState([]);
  const [userName, setUserName] = useState([]);
  const [userImg, setUserImg] = useState([]);
  const [modalOpen, setModalOpen] = useState(false); // Modal state
  const [selectedTripId, setSelectedTripId] = useState(null); // Store selected trip ID
  
  useEffect(() => {
    const apiUser = `/api/user/${userData.id}`;

    axios.get(apiUser)
      .then((res) => {
        setScheduleList(res.data.schedule);
        setSuggestedTrips(res.data.suggestedTrip);
        setUserName(res.data.schedule[0].first_name);
        setUserImg(res.data.schedule[0].profile_thumbnail_img);
      })
      .catch((err) => {
        setScheduleList({ error: err.message });
        setSuggestedTrips({ error: err.message });
        setUserName({ error: err.message });
      });
  }, [userData.id]);

  const changeUser = (newUserId) => {
    setUserData({ ...userData, id: newUserId });
  };

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
        <Navigation 
          loggedIn={userData.loggedIn}
          userId={userData.id}
          userImg={userImg} 
        />
          <div className="flex-column">
            <Header 
              userName={userName}
            />

              <div className="body">
                <h2>{userName}'s profile</h2>
                <button onClick={() => changeUser(1)}>Change User 1</button>
                <button onClick={() => changeUser(2)}>Change User 2</button>
                <button onClick={() => changeUser(3)}>Change User 3</button>
                <div className="page-heading"><h1>Destination Suggestion</h1></div>
                <div className="item-list">
                  {selectedTrips.map((item) => (
                    <TripSuggestion 
                      key={item.id} 
                      trip={item}
                      openModal={openModal}
                    />
                  ))}
                </div>
                <div className="page-heading"><h1>My Schedule</h1></div>
                {userData.loggedIn ? (
                  <div className="item-list">
                    {schedules.map((item) => (
                      <MyScheduleList 
                        key={item.id} 
                        schedule={item}
                      />
                    ))}
                  </div>
                ) : (
                  <h3>Please login to see your schedule.</h3>
                )}
              </div>

          </div>
        </div>

        {modalOpen && (
          <ModalPlace placeId={selectedTripId} handleClose={closeModal} />
        )}
    </div>
  );
}