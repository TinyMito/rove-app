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

  const [placeData, setPlaceData] = useState(null);
  const [nearbyAttractions, setNearbyAttractions] = useState([]);

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
              <span style={{display: 'block', fontSize: '1.2em', padding: '20px'}}>Once you're done adding, please click finish at the left.</span>

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
                          scheduleId={userData.scheduleId} 
                          userId={userData.id} 
                          locationName={location} 
                          placeId={id} 
                          attractionId={attraction.place_id} 
                          attractionName={attraction.name} 
                          attractionAddress={attraction.vicinity} 
                          photoUrl={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${attraction.photos?.[0]?.photo_reference}&key=${apiKey}`} 
                          longitude={attraction.geometry.location.lng}
                          latitude={attraction.geometry.location.lat}
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
