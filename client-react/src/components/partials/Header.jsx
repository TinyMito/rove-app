import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import '../../styles/Header.scss';

// GLOBAL DATA: Import GlobalData function
import { globalData } from '../../GlobalData';

export default function Header({isAuthenticated, userName, slogan, date}) {
  // GLOBAL DATA: Add the useState const from globalData, ie. userData.id, userData.firstname etc
  const { userData, setUserData, fetchUserData } = globalData();

  const defaultSlogan = `It's time to pick your next travel destination!`

  const displaySlogan = slogan ? slogan : defaultSlogan;
  return (
    <div className="header">
      <div className="slogan-box">
        <h2 className="sloganStyle">Welcome {isAuthenticated || userData.id !== undefined ? `${userName}!` : "Traveller!"}</h2>
        <h1 className="sloganStyle">{displaySlogan}</h1>
        <h2 className="sloganStyle-schedule-date">{date}</h2>
      </div>
      <img className="header-image" src="../../header.png"/>
    </div>
  );
}