// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

import MyTrips from './MyTrips';

export default function Detail() {
  // Get url id parameter
  const { id } = useParams();
  const [ trips, setTrips ] = useState([]);

  console.log("JSON",trips)

  const page_heading = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    borderBottom: '5px solid #71B1F8',
  };

  useEffect(() => {
    const apiUser = `/api/user/${id}`;

    axios.get(apiUser)
      .then((res) => {
        setTrips(res.data);
      })
      .catch((err) => {
        setTrips({ error: err.message });
      });
  }, [id]);
  
  return (
    <div className="box">
    <div className="flex-row">
        <Navigation />
        <div className="flex-column">
          <Header />

    <div className="body">
      <h1>Welcome {trips.first_name} {trips.last_name}!</h1>
      <div style={page_heading}><h1>Trip Suggestion</h1></div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>

      </div>
      <div style={page_heading}><h1>My Schedule</h1></div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {trips.map((trip) => (
          <MyTrips key={trip.id} trips={trip}/>
        ))}
      </div>
    </div>

    </div>
    </div>
    </div>
  );
}