// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';

// Axios, useEffect, useState, useParams
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuthentication } from 'useAuthentication';

// GLOBAL DATA: Import GlobalData function
import { globalData } from '../GlobalData';

// Import Navigation & Header
import Navigation from './partials/Navigation';
import Header from './partials/Header';

export default function NotFoundPage() {
  
  // GLOBAL DATA: Add the useState const from globalData, ie. userData.id, userData.firstname etc
  const { userData, setUserData } = globalData();

  return (
    <div className="box"> 
      <div className="flex-row">
      <Navigation userImg={userData.userImg} />
        <div className="flex-column">
        <Header userName={userData.userFirst} />
          <div className="body">
            {/* Your codes start here */}

            <div>
              <h1>404 - Page not found</h1>
              <p>The page you are looking for does not exist.</p>
              <Link to="/">Go back to home</Link>
            </div>

            {/* Your codes end here */}
          </div>
        </div>
      </div>
    </div>
  );
}