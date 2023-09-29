// MUI Components
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();
  const [destination, setDestination] = useState({});

  useEffect(() => {
    const apiDestination = '/api/destination/${id}';
    console.log('API URL:', apiDestination);

    axios.get(apiDestination)
      .then((res) => {
        setDestination(res.data);
      })
      .catch((err) => {
        setDestination({ error: err.message });
      });
  }, [id]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        alt="stanley park"
        image={destination.cover_photo_url}
        title="stanley park"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {destination.city_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {destination.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Instagram</Button>
      </CardActions>
    </Card>
  );
}