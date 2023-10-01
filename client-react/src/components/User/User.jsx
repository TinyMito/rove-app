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
  const isMobile = useMediaQuery('(min-width:800px)');
  const cardMaxWidth = isMobile ? 600 : 'auto';

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
    <Card sx={{ maxWidth: cardMaxWidth, padding: '0px 20px', border: '3px solid #ccc', borderRadius: 2 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
          <Typography sx={{ padding: '20px 0px' }} align="left" gutterBottom variant="h5" component="div">
            {place.place_name}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <CardActions >
            <Button fullWidth={true} sx={{ fontSize: '30px' }} href={place.google_map_link} size="small" target="_blank"><i className="bi bi-map"></i></Button>
            <Button fullWidth={true} sx={{ fontSize: '30px' }} href="#" size="small"><i className="bi bi-calendar-plus"></i></Button>
          </CardActions>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <CardMedia
            component="img"
            sx={{ height: 300, border: '3px solid #ccc', borderRadius: 2 }}
            alt={place.place_name}
            image={place.cover_photo_url}
            title={place.place_name}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography align="left" variant="body2" color="text.secondary">
            <Typography component="legend">Google Review Stars:</Typography>
          </Typography>
        </Grid>
      </Grid>
      <CardContent>
        <Typography align="left" variant="body2" color="text.secondary">
          {place.description}
        </Typography>
      </CardContent>
    </Card>
  );
}