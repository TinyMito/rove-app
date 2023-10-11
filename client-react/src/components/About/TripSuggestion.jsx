// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';
import { Link } from "react-router-dom";

export default function TripSuggestion({data, openModal}) { 

  const cleanImgUrl = data.photo_url ? data.photo_url : "./travel.png";

  return (
    <div className="item-card">
      <div>
        <Link to={`/card/${data.name}/${data.google_place_id}`} /* onClick={() => openModal(trip.id)} */>
          <CardMedia
            component="img"
            className="item-card-image"
            alt={data.name}
            image={cleanImgUrl}
            title={data.name}
          />
          <div className="item-card-caption">
            <div className="caption-title">{data.name}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}