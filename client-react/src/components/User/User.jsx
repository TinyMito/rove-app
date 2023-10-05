// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
  // Get url id parameter
  const { id } = useParams();
  const [place, setPlace] = useState({});

  // Responsive Design for Mobile
  //const isMobile = useMediaQuery('(min-width:800px)');
  //const cardMaxWidth = isMobile ? 600 : 'auto';

  useEffect(() => {
    const apiUser = `/api/user/${id}`;

    axios.get(apiUser)
      .then((res) => {
        setPlace(res.data);
      })
      .catch((err) => {
        setPlace({ error: err.message });
      });
  }, [id]);
  
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
    <Navigation />
    <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Header />

    <div className="body">
      <Card sx={{ padding: '0px 20px'}}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={8}>
            <Typography sx={{ padding: '20px 0px' }} align="left" gutterBottom variant="h5" component="div">
              {place.place_name}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>

    </div>
    </div>
    </>
  );
}