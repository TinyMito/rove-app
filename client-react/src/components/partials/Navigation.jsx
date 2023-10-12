import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import appIcon from '../../assets/images/logo.png';
import '../../styles/Navigation.scss';

// Axios, useEffect, useState, useParams
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// GLOBAL DATA: Import GlobalData function
import { globalData } from '../../GlobalData';

export default function Navigation({isAuthenticated, userImg}) {
  
  // GLOBAL DATA: Add the useState const from globalData, ie. userData.id, userData.firstname etc
  const { userData, setUserData, fetchUserData } = globalData();
  const navigate = useNavigate();
  
  // Logout
  const handleLogout = () => {
    axios.post('/api/logout')
      .then((response) => {
        fetchUserData();
        navigate("/access", { state: { hasMessage: true, message: "You have successfully logged out!" } });
      })
      .catch((error) => {
        console.error('Logout failed:', error);
      });
  };
  
  // Tooltip
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#fff',
        color: '#9399B4',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)',
        fontSize: '1.5em',
        borderRadius: '7px'
      },
  }));

  return (
    <div className="navigation">
      <div className="navFlex">
        <div>
        <LightTooltip title="Let's Explore!">
          <Link className="appBtnStyle" to="/about"><img className="appIconStyle" src={appIcon} alt="Logo" /></Link>
        </LightTooltip>
        {isAuthenticated || userData.id !== undefined ? (
          <>
            <LightTooltip title="My Schedule">
              <Link className="userBtnStyle spaceBtnStyle" to={`/user`}><img className="userIconStyle" src={`/${userImg}`} alt="Avatar" /></Link>
            </LightTooltip>
          </>
        ) : (
          <>
            <LightTooltip title="Login / Register">
              <Link className="userBtnStyle spaceBtnStyle" to={`/access`} ><i className="bi bi-person-circle" ></i></Link>
            </LightTooltip>
          </>
        )}
          <LightTooltip title="Create Schedule">
            <Link className="navBtnStyle" to="/survey"><i className="bi bi-calendar-week"></i></Link>
          </LightTooltip>
          <LightTooltip title="World Map">
            <Link className="navBtnStyle spaceBtnStyle" to="/map"><i className="bi bi-geo-alt"></i></Link>
          </LightTooltip>
        {isAuthenticated || userData.id !== undefined ? (
          <>
            <LightTooltip title="Logout">
              <Link className="navBtnStyle" onClick={() => handleLogout()}><i className="bi bi-box-arrow-left"></i></Link>
            </LightTooltip>
          </>
        ) : ( 
          <>
          </>
          )}
        </div>
        <LightTooltip title="<3">
          <Link className="navBtnStyle spaceBtnStyle" to="/team"><i className="bi bi-bookmark-heart-fill"></i></Link>
        </LightTooltip>
      </div>
    </div>
  );
}