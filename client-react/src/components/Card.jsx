import React, { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './Card.css'

export default function Suggestion() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/users')
      .then((response) => response.json())
      .then((users) => {
        setData(users);
        console.log('users:', users)
      });
  }, []);

  return (
    <div>
      <h1>Photo Gallery</h1>
        <div className='App'>
          <div className='photo-list'>
            {data.slice(0, 8).map((users) => (
              <Card sx={{maxWidth: 345}}key={users.id} className='photo-item'>
                <CardMedia
                  component='img'
                
                  height='300'
                  image={users.profile_thumbnail_img}
                />
                <CardContent>
                  <Typography variant='h6'>{users.name}</Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Name: {users.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Description: {users.profile_information}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
    </div>
  );
}