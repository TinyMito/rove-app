import { useParams } from 'react-router-dom';
import MapSchedule from './MapSchedule';
import { useMapSchedule } from './useMapSchedule';

export default function MapMaster() {
  const { id } = useParams();
  const { trips, centerCoord } = useMapSchedule({ id });

  return (
    centerCoord && 
      <MapSchedule 
        center={centerCoord}
        trips={trips}
      />
  );
}
