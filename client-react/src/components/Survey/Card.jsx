// MUI Components
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../styles/Card.scss';
import Modal from './Modal';
import { useAuthentication } from 'useAuthentication';

// GLOBAL DATA: Import GlobalData function
import { globalData } from '../../GlobalData';

// Import Navigation & Header
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

export default function Suggestion() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const { id, location } = useParams();

  // Requires the user to be logged in
  const isAuthenticated = useAuthentication();

  // GLOBAL DATA: Add the useState const from globalData, ie. userData.id, userData.firstname etc
  const { userData, setUserData } = globalData();

  // Get the list of unique schedule IDs if the single schedule ID is null
  const [uniqueIds, setUniqueIds] = useState([]);

  const [placeData, setPlaceData] = useState(null);
  const [nearbyAttractions, setNearbyAttractions] = useState([]);

  // ScheduleId Data 
  useEffect(() => {
    axios.get(`/api/card/getscheduleid`)
      .then((res) => {
        const scheduleData = res.data.cardscheduleId[0];
        const filteredScheduleByUserId = scheduleData.filter((item) => item.user_id === userData.id);
        const filteredScheduleByGoogleId = filteredScheduleByUserId.filter(
          (item) => item.google_place_id === id || item.google_destination_id === id
        );

        const uniqueIds = Array.from(new Set(filteredScheduleByGoogleId.map(item => item.id)));

        if (userData.scheduleId === null || userData.scheduleId === undefined) {
          // If the single schedule ID is null, means user has to choose from dropdown list.
          //console.log("Schedule ID was null, search found the following schedules:", uniqueIds);
          setUniqueIds(uniqueIds);
        } else {
          // Single schedule ID detected, user doesn't need to use dropdown list.
          //console.log("Single Schedule ID was found and lock to it:", userData.scheduleId);
          setUniqueIds([userData.scheduleId])
        }

      })
      .catch((err) => {
        setUserData({ error: err.message });
      });
  }, []);

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=name,formatted_address,geometry&key=${apiKey}`
        );
        const data = await response.json();

        if (data.status === 'OK') {
          setPlaceData(data.result);
          //console.log('Place details:', data.result);

          // Check if location is available in placeData
          if (data.result.geometry && data.result.geometry.location) {
            // Fetch nearby attractions
            fetchNearbyAttractions(data.result.geometry.location, apiKey);
          } else {
            console.error('Location not available for this place.');
          }
        } else {
          //console.error('Error fetching place details:', data.status);
        }
      } catch (error) {
        //console.error('Error fetching place details:', error);
      }
    };

    const fetchNearbyAttractions = async (location, apiKey) => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=1000&type=tourist_attraction&key=${apiKey}`
        );
        const data = await response.json();

        if (data.status === 'OK') {
          setNearbyAttractions(data.results);
          //console.log('Nearby attractions:', data.results);
        } else {
          //console.error('Error fetching nearby attractions:', data.status);
        }
      } catch (error) {
        //console.error('Error fetching nearby attractions:', error);
      }
    };

    fetchPlaceDetails();
  }, [id, location]);


  return (
    <div className="box"> 
      <div className="flex-row">
      <Navigation isAuthenticated={isAuthenticated} userImg={userData.userImg} />
        <div className="flex-column">
        <Header isAuthenticated={isAuthenticated} userName={userData.userFirst} />
          <div className="body">
            {/* Your codes start here */}

              <div className="h1-flex">
                <h1>Nearby Attractions - {location}</h1>
                <Button className="navBtn" size="large" onClick={() => window.history.back()}>Back</Button>
                <Button className="navBtn" size="large" variant="contained" href="/user">Finish</Button>
              </div>
              <span style={{display: 'block', fontSize: '1.2em', padding: '20px'}}>Once you're done adding, please click the finish button.</span>

              {nearbyAttractions.length > 0 ? (

                <div>
                  <div className='attractions-list'>
                    {nearbyAttractions.slice(0,20).map((attraction, index) => (
                      
                      <Card raised={true} sx={{ m:2 }} key={index} className='attraction-item'> 
                  
                        <CardMedia
                          className="card-image"
                          component='img'
                          image={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${attraction.photos?.[0]?.photo_reference}&key=${apiKey}`}
                        />
                        <CardContent className='attraction-item-content'>
                          <Rating name="read-only" value={attraction.rating} readOnly />
                          <Typography variant='h6'>{attraction.name}</Typography>
                          <Typography variant='body2' color='text.secondary'>
                            Address:<br/> {attraction.vicinity}
                            {/* PlaceId: {attraction.place_id} */}
                          </Typography>
                          <Typography variant='body2' color='text.secondary'>
                          
                          </Typography>
                        </CardContent>
                        <Modal 
                          userData={userData}
                          setUserData={setUserData}
                          scheduleId={userData.scheduleId}
                          uniqueIds={uniqueIds}
                          userId={userData.id} 
                          locationName={location} 
                          placeId={id} 
                          attractionId={attraction.place_id} 
                          attractionName={attraction.name} 
                          attractionAddress={attraction.vicinity} 
                          photoUrl={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${attraction.photos?.[0]?.photo_reference}&key=${apiKey}`} 
                          longitude={attraction.geometry.location.lng}
                          latitude={attraction.geometry.location.lat}
                          scheduleStart={userData.scheduleStartDate}
                          scheduleEnd={userData.scheduleEndDate}
                        />

                      </Card>
                    ))}
                  </div>
                </div>
                
              ) : (
                <h1>No nearby attractions found.</h1>
              )}
      
            {/* Your codes end here */}
            </div>
        </div>
      </div>
    </div>
  );
}
