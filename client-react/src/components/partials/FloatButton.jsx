import { useCallback }from 'react';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { useNavigate } from 'react-router-dom';

export default function FloatButton({scheduleId}) {

  const navigate = useNavigate();
  const handleNavigate =useCallback(() => {
    navigate(`/map/${scheduleId}`)
  })
  return (
      <div
        className="navigate-schedule-all-items"
        sx={{borderRight: '90px !important'}}
        onClick={handleNavigate}
      >
        <MapOutlinedIcon
          className="float-map"
        />
      </div>
  );
}