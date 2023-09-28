import React, { useState } from 'react';
// card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Pagination
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// card
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

// Date Range Picker
import CalendarPop from "./shared/CalendarPop";


export default function Schedule() {

  const [checkInDate, setCheckInDate] = useState(null) 
  const [checkOutDate, setCheckOutDate] = useState(null) 

  return (
    <div>
      <title>Vancouver</title>
      <div id="root"></div>

      <h1 className="trip_location">Vancouver</h1>
      {/* <Date Range Picker/> */}
      <h3 className="travel_dates">
        <CalendarPop
          checkInDate={checkInDate}
          setCheckInDate={setCheckInDate}
          checkOutDate={checkOutDate}
          setCheckOutDate={setCheckOutDate}
        />
      </h3>
      {/* pagination */}
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
      <div className="timeline" />

      <section className="itinerary_day">
        <div className="add">
          <a ><i className="bi bi-plus"></i></a>
        </div>

        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
        {/* Item 1 */}
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
              08:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="stanley park"
                  height="300"
                  image="https://tinyurl.com/ta4kmc28"
                />
                
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Stanley Park
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A beautiful park in the middle of Vancouver downtown.
                    <span/>
                  <a><i className="bi bi-pencil"/></a>
                  </Typography>
                </CardContent>
                
                <CardActions>
                  <Button size="small"><i className="bi bi-map"></i></Button>
                  <Button size="small"><i className="bi bi-trash"></i></Button>
                </CardActions>
              </Card>
            </TimelineContent>
          </TimelineItem>

          {/* Item 2 */}
          <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
              10:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            
            <TimelineContent>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="fairmont hotel"
                  height="300"
                  image="https://tinyurl.com/3jskbrps"
                />
                
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Fairmont Hotel
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A historic hotel in Vancouver.
                    <span/>
                  <a><i className="bi bi-pencil"/></a>
                  </Typography>
                </CardContent>
                
                <CardActions>
                  <Button size="small"><i className="bi bi-map"></i></Button>
                  <Button size="small"><i className="bi bi-trash"></i></Button>
                </CardActions>
              </Card>
            </TimelineContent>
          </TimelineItem>

          {/* Item 3 */}
          <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
              12:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            {/* no connector here as is the last item */}
            </TimelineSeparator>
            
            <TimelineContent>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="fairmont hotel"
                  height="300"
                  image="https://tinyurl.com/yz6en3pb"
                />
                
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    English Bay
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A scenic beach in downtown Vancouver visited by tourists from all over the world.
                    <span/>
                  <a><i className="bi bi-pencil"/></a>
                  </Typography>
                </CardContent>
                
                <CardActions>
                  <Button size="small"><i className="bi bi-map"></i></Button>
                  <Button size="small"><i className="bi bi-trash"></i></Button>
                </CardActions>
              </Card>
            </TimelineContent>
          </TimelineItem>

        </Timeline>

      </section>
      </div>
  );

}
