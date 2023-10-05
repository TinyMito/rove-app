// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Import Navigation & Header
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

export default function Detail() {
  
  return (
    <div className="box">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Navigation />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Header />

          <div className="body">
            Example Layout
          </div>

        </div>
      </div>
    </div>
  );
}