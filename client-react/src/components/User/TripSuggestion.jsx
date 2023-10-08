// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';
import { Link } from "react-router-dom";

export default function TripSuggestion({data, openModal}) { 
  return (
    <div className="item-card">
      <div>
        <Link to={`/card/${data.name}/${data.google_place_id}`} /* onClick={() => openModal(trip.id)} */>
          <CardMedia
            component="img"
            className="item-card-image"
            alt={data.name}
            image={data.photo_url}
            title={data.name}
          />
          <div className="item-card-caption">
            <span className="caption-title">{data.name}</span><br/>
          </div>
        </Link>
      </div>
    </div>
  );
}