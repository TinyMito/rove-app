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
        <Navigation />
        <div className="flex-column">
          <Header />
          <div className="body">
            {/* Your codes start here */}

            <h1>TEST PAGE Example</h1>

            <h2>{userData.id}</h2>

            <button onClick={() => changeUser(1)}>Change User 1</button>
            <button onClick={() => changeUser(5)}>Change User 5</button>

            {/* Your codes end here */}
          </div>
        </div>
      </div>
    </div>
  );
}