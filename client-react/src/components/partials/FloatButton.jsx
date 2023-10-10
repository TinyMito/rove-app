import { useCallback }from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { useNavigate } from 'react-router-dom';


export default function FloatButton(id) {

  const navigate = useNavigate();
  const handleNavigate =useCallback(() => {
    navigate(`/map/${id}`)
  })
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab 
        color="primary" aria-label="add"
        class="navigate-schedule-all-items"
      >
        <MapOutlinedIcon
          class="float-map"
          onClick={handleNavigate}
          sx={{color:'white', fontSize: '5em'}}
        />
      </Fab>
    </Box>
  );
}