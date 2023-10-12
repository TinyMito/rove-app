// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';

// Axios, useEffect, useState, useParams
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// GLOBAL DATA: Import GlobalData function
import { globalData } from '../../GlobalData';

// Import Navigation & Header
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

export default function Dev() {
  // GLOBAL DATA: Add the useState const from globalData, ie. userData.id, userData.firstname etc
  const { userData, setUserData } = globalData();

  // EXAMPLE change user id in GLOBAL DATA
  const changeUser = (newUserId) => {
    setUserData({ ...userData, id: newUserId });
  };

  return (
    <div className="box"> 
      <div className="flex-row">
      <Navigation userImg={userData.userImg} />
        <div className="flex-column">
        <Header userName={userData.userFirst} />
          <div className="body about">
            {/* Your codes start here */}

            <h1>About Rove!</h1>

            <div className="box-design-03">
              <span><strong>Endless Inspiration:</strong> Dive into a curated collection of stunning destinations and travel experiences that will awaken your passion for adventure.</span>
              <span><strong>Effortless Planning:</strong> Easily bookmark your favorite destinations, create personalized travel itineraries, and access invaluable travel tips to plan your dream trip with ease.</span>
              <span><strong>Confidence in Travel:</strong> Stay informed with up-to-date travel information, visa requirements, safety tips, and local insights, ensuring your journeys are as seamless as they are memorable.</span>



              <p>Made by Developers,</p>
              <p>Team Rove</p>

              <p>Meet the minds behind the magic:</p>

              <ul>
                <li>Kevin (<a href="https://github.com/TinyMito" target="_blank">GitHub</a>)</li>
                <li>Euso (<a href="https://github.com/eunsookim1" target="_blank">GitHub</a>)</li>
                <li>Ray (<a href="https://github.com/raylin98" target="_blank">GitHub</a>)</li>
                <li>Admeh (<a href="https://github.com/Alhajahmed" target="_blank">GitHub</a>)</li>
              </ul>
            </div>

            {/* Your codes end here */}
          </div>
        </div>
      </div>
    </div>
  );
}