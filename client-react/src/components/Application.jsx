import { css } from '@emotion/react';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import '../styles/Application.scss';

import appIcon from '../assets/images/logo.png';
import userIcon from '../assets/images/avatar.png';

export default function Home() {

  const navBtnStyle = {
    fontSize: '5em !important', 
    '&:hover': {
    }
  };

  return (
    <div className="landing">
      {/* <img className="app-logo" src={appIcon} alt="Logo" />
      <div>
        <span className="app-slogan">Welcome to Rove!</span>
      </div>
      <Button sx={navBtnStyle} href="/user/1" size="small"><i className="bi bi-suitcase2"></i>Login</Button>
      <img src="./header.png"/> */}
    </div>
  );
}