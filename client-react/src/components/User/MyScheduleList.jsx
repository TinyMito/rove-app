// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';
import { Link } from "react-router-dom";

export default function MyScheduleList({schedule}) { 
  return (
    <div className="item-card">
      <div>
        <Link to={`/schedule/${schedule.id}`}>
          <CardMedia
            component="img"
            className="item-card-image"
            alt={schedule.name}
            image={schedule.cover_photo_url}
            title={schedule.name}
          />
          <div className="item-card-caption">
            <span className="caption-title">{schedule.name}</span><br/>
            <span className="caption-date"><i className="bi bi-airplane"></i> {schedule.start_date}</span><br/>
            <span className="caption-date"><i className="bi bi-arrow-return-right"></i> {schedule.end_date}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}