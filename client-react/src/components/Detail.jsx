import { useState } from 'react';

// MUI Components
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Detail() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        alt="stanley park"
        image="https://tinyurl.com/ta4kmc28"
        title="stanley park"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Stanley Park
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location Descriptions
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Instagram</Button>
      </CardActions>
    </Card>
  );
}