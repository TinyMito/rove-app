import React, { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './Card.css'

export default function Suggestion() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((photos) => {
        setData(photos);
      });
  }, []);

  return (
    <div>
      <h1>Photo Gallery</h1>
        <div className='App'>
          <div className='photo-list'>
            {data.slice(0, 8).map((photo) => (
              <Card sx={{maxWidth: 345}}key={photo.id} className='photo-item'>
                <CardMedia
                  component='img'
                  alt={photo.title}
                  height='300'
                  image={photo.thumbnailUrl}
                />
                <CardContent>
                  <Typography variant='h6'>{photo.title}</Typography>
                  <Typography variant='body2' color='text.secondary'>
                    ID: {photo.id}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Album ID: {photo.albumId}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
    </div>
  );
}