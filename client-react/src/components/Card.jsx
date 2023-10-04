import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './Card.css';

export default function Suggestion() {
  const [placeData, setPlaceData] = useState(null);
  const [nearbyAttractions, setNearbyAttractions] = useState([]);
  const { location, id } = useParams();

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY; // Replace with your Google API Key
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=name,formatted_address,geometry&key=${apiKey}`
        );
        const data = await response.json();

        if (data.status === 'OK') {
          setPlaceData(data.result);
          console.log('Place details:', data.result);

          // Check if location is available in placeData
          if (data.result.geometry && data.result.geometry.location) {
            // Fetch nearby attractions
            fetchNearbyAttractions(data.result.geometry.location, apiKey);
          } else {
            console.error('Location not available for this place.');
          }
        } else {
          console.error('Error fetching place details:', data.status);
        }
      } catch (error) {
        console.error('Error fetching place details:', error);
      }
    };

    const fetchNearbyAttractions = async (location, apiKey) => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=1000&type=tourist_attraction&key=${apiKey}`
        );
        const data = await response.json();

        if (data.status === 'OK') {
          setNearbyAttractions(data.results);
          console.log('Nearby attractions:', data.results);
        } else {
          console.error('Error fetching nearby attractions:', data.status);
        }
      } catch (error) {
        console.error('Error fetching nearby attractions:', error);
      }
    };

    fetchPlaceDetails();
  }, [id]);

  return (
    <div className="body">
      <h1>Nearby Attractions - {location}</h1>
      {nearbyAttractions.length > 0 ? (
        <div>
          <div className='attractions-list'>
            {nearbyAttractions.slice(0,8).map((attraction, index) => (
              <Card sx={{ maxWidth: 345 }} key={index} className='attraction-item'>
                <CardMedia
                  component='img'
                  height='300'
                  image={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${attraction.photos?.[0]?.photo_reference}&key=${apiKey}`}
                />
                <CardContent>
                  <Typography variant='h6'>{attraction.name}</Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Address: {attraction.vicinity}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Rating: {attraction.rating}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <p>No nearby attractions found.</p>
      )}
    </div>
  );
}
