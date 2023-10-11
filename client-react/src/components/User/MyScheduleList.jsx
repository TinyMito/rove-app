// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';
import { Link } from "react-router-dom";

export default function MyScheduleList({schedule}) { 

  const cleanImgUrl = schedule.attraction_photo_url ? schedule.attraction_photo_url : "./travel.png";

  return (
    <div className="item-card">
      <div>
        <Link to={`/schedule/${schedule.id}`}>
          <CardMedia
            component="img"
            className="item-card-image"
            alt={schedule.name}
            image={cleanImgUrl}
            title={schedule.name}
          />
          <div className="item-card-caption">
            <div className="caption-title">{schedule.name}</div>
            <div className="caption-date">{schedule.start_date}</div>
            <div className="caption-date">{schedule.end_date}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}