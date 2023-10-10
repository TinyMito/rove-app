import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import '../../styles/Header.scss';

const defaultSlogan = `It's time to pick your next travel destination!`
export default function Header({userName, slogan, date}) {

  const displaySlogan = slogan ? slogan : defaultSlogan;
  return (
    <div className="Header">
      <div>
        <h2 className="sloganStyle">Welcome {userName}!</h2>
        <h1 className="sloganStyle">{displaySlogan}</h1>
        <h2 className="sloganStyle-schedule-date">{date}</h2>
      </div>
    </div>
  );
}