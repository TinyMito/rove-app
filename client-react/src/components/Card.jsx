import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './Card.css'

export default function Suggestion() {
  const [data, setData] = useState([]);
  
  const { location, id } = useParams();
  console.log(location, id)
  useEffect(() => {
    fetch(`/api/place/${id}`)
      .then((response) => response.json())
      .then((places) => {
        setData(places);
        console.log('places:', places)
      });
  }, []);

  return (
    <div className="body">
      <h1>Photo Gallery - {location} </h1>
        <div className='App'>
          <div className='photo-list'>
            {data.slice(0, 8).map((places) => (
              <Card sx={{maxWidth: 345}}key={places.id} className='photo-item'>
                <CardMedia
                  component='img'
                  height='300'
                  image={places.thumbnail_img_url}
                />
                <CardContent>
                  <Typography variant='h6'>{places.name}</Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Name: {places.destination_id}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Description: {places.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
    </div>
  );
}