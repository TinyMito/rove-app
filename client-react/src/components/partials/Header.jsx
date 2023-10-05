import { Link } from "react-router-dom";
import { Button } from '@mui/material';

export default function Header() {

  return (
    <div className="Header">
      <div>
        <h2>Welcome -user_name-!</h2>
        <h1>It's time to pick you next travel destination!</h1>
      </div>
    </div>
  );
}