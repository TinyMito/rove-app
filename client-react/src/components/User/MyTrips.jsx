// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';
import { Link } from "react-router-dom";

export default function MyTrips({trips}) { 
  return (
    
      <div style={{ padding: '16px' }}>
        <Link to={`/schedule/${trips.id}`}>
          <CardMedia
            component="img"
            sx={{ width: 200, height: 300, border: '0px solid #ccc', borderRadius: 2 }}
            alt={trips.name}
            image={trips.thumbnail_img_url}
            title={trips.name}
          />
        </Link>
        {trips.name}
      </div>

  );
}