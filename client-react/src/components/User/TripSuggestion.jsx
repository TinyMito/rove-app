// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';
import { Link } from "react-router-dom";

export default function TripSuggestion({trip}) { 
  return (
    <div className="item-card">
      <div>
        <Link to={`/place/${trip.id}`}>
          <CardMedia
            component="img"
            className="item-card-image"
            alt={trip.name}
            image={trip.cover_photo_url}
            title={trip.name}
          />
          <div className="item-card-caption">
            <span className="caption-title">{trip.name}</span><br/>
          </div>
        </Link>
      </div>
    </div>
  );
}