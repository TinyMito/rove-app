import { useCallback }from 'react';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { useNavigate } from 'react-router-dom';

export default function FloatButton({scheduleId}) {

  const navigate = useNavigate();
  const handleNavigate =useCallback(() => {
    navigate(`/map/${scheduleId}`)
  })
  return (
    <div className="float-flex">
      <div
        className="float-button"
        onClick={handleNavigate}
      >
        <div className="float-icon"><i className="bi bi-pin-map"></i>Schedules on Map</div>
      </div>
    </div>
  );
}