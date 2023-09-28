// card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function () {
  return (
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
          <span />
          <a><i className="bi bi-pencil" /></a>
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small"><i className="bi bi-map"></i></Button>
        <Button size="small"><i className="bi bi-trash"></i></Button>
      </CardActions>
    </Card>
  )
};