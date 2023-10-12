import { useParams } from 'react-router-dom';
import MapSchedule from './MapSchedule';
import MapData from './MapData';
import { useMapSchedule } from './useMapSchedule';

export default function MapMaster() {
  const { id } = useParams();
  const { trips, centerCoord } = useMapSchedule({ id });

  return (
    (trips.length > 0 ? (
      centerCoord && 
        <MapSchedule 
          center={centerCoord}
          trips={trips}
        />
        ) : (
          <MapData /> // Render MapData component when trips array is empty
        )
      )
  );
}