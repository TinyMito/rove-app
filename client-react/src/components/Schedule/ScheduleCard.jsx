// card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function (prop) {
  const { 
    start_time, 
    end_time, 
    place_description, 
    thumbnail_img_url, 
    cover_photo_url, 
    google_map_link,
    name  
  } = prop

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="stanley park"
        height="500"
        image={cover_photo_url}
      />

      <CardContent>
        <Typography gutterBottom variant="h3" component="div" >
          {name}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {place_description}
          <span />
          <a><i className="bi bi-pencil" /></a>
        </Typography>
      </CardContent>

      <CardActions>
        <a className="map_button"src={google_map_link} size="large"><i className="bi bi-map"></i></a>
        <Button size="large"><i className="bi bi-trash"></i></Button>
      </CardActions>
    </Card>
  )
};