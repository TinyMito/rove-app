// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';

// Axios, useEffect, useState, useParams
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthentication } from 'useAuthentication';

// GLOBAL DATA: Import GlobalData function
import { globalData } from '../../GlobalData';

// Import Navigation & Header
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

export default function Dev() {
  // Requires the user to be logged in
  const isAuthenticated = useAuthentication();

  // GLOBAL DATA: Add the useState const from globalData, ie. userData.id, userData.firstname etc
  const { userData, setUserData } = globalData();

  // EXAMPLE change user id in GLOBAL DATA
  const changeUser = (newUserId) => {
    setUserData({ ...userData, id: newUserId });
  };

  return (
    <div className="box"> 
      <div className="flex-row">
      <Navigation isAuthenticated={isAuthenticated} userImg={userData.userImg} />
        <div className="flex-column">
        <Header isAuthenticated={isAuthenticated} userName={userData.userFirst} />
          <div className="body">
            {/* Your codes start here */}

            <div>
              {isAuthenticated ? (
                // Render authenticated content
                <p>User is authenticated.</p>
              ) : (
                // Render non-authenticated content
                <p>User is not authenticated.</p>
              )}
            </div>

            <h1>TEST PAGE Example</h1>

            <div>
              {userData.id !== 1 ? (
                // Render content that depends on userData
                <div>
                  <h2>Welcome, {userData.userName}</h2>
                  {/* Other content */}
                </div>
              ) : (
                // Render a loading indicator or message
                <div>Loading...</div>
              )}
            </div>

            {/* Your codes end here */}
          </div>
        </div>
      </div>
    </div>
  );
}