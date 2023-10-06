import { Link } from "react-router-dom";
import { Button } from '@mui/material';

export default function Header() {

  const sloganStyle = {
    color: '#FFF',
    maxWidth: '400px'
  }

  return (
    <div className="Header">
      <div>
        <h2 style={sloganStyle}>Welcome John</h2>
        <h1 style={sloganStyle}>It's time to pick your next travel destination!</h1>
      </div>
    </div>
  );
}