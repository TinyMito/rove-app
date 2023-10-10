import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import '../../styles/Header.scss';

// GLOBAL DATA: Import GlobalData function
import { globalData } from '../../GlobalData';

export default function Header({isAuthenticated, userName}) {
  // GLOBAL DATA: Add the useState const from globalData, ie. userData.id, userData.firstname etc
  const { userData, setUserData, fetchUserData } = globalData();

  return (
    <div className="Header">
      <div>
        <h2 className="sloganStyle">Welcome {isAuthenticated || userData.id !== undefined ? `${userName}!` : "Traveller!"}</h2>
        <h1 className="sloganStyle">It's time to pick your next travel destination!</h1>
      </div>
    </div>
  );
}