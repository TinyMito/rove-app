import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import '../../styles/Header.scss';

export default function Header() {

  return (
    <div className="Header">
      <div>
        <h2 className="sloganStyle">Welcome John</h2>
        <h1 className="sloganStyle">It's time to pick your next travel destination!</h1>
      </div>
    </div>
  );
}