// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';

// Axios, useEffect, useState, useParams
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Import Navigation & Header
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

export default function Dev() {
  return (
    <div className="box"> 
      <div className="flex-row">
        <Navigation />
        <div className="flex-column">
          <Header />
          <div className="body">
            {/* Your codes start here */}


            <h1>TEST PAGE Example</h1>
            <h2>Header 2</h2>
            <h3>Example Layout see /components/Dev/</h3>
            <span>Normal Text - font size working in progress will be adjusted later.</span>
            
            <div>
              <Button sx={{ fontSize: '30px' }} href="#" size="large">Text Base Button</Button>
            </div>

            <div>
              <Button sx={{ fontSize: '30px' }} href="#" size="large" disabled>Button Disabled</Button>
            </div>

            <Button fullWidth={true} sx={{ fontSize: '30px' }} href="#" size="large">Full Width</Button>


            {/* Your codes end here */}
          </div>
        </div>
      </div>
    </div>
  );
}