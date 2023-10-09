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
            image='https://image.cnbcfm.com/api/v1/image/107178919-1673854215895-gettyimages-669463000-shutterstock_621020393.jpeg?v=1674003106'
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