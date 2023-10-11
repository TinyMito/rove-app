import { Link } from "react-router-dom";
import { Button } from '@mui/material';
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

  return (
    <div className="navigation">
      <div className="navFlex">
        <div>
        <Link className="appBtnStyle" to="/about"><img className="appIconStyle" src={appIcon} alt="Logo" /></Link>
        {isAuthenticated || userData.id !== undefined ? (
          <>
            <Link className="userBtnStyle spaceBtnStyle" to={`/user`}><img className="userIconStyle" src={`/${userImg}`} alt="Avatar" /></Link>
          </>
        ) : (
          <>
            <Link className="userBtnStyle spaceBtnStyle" to={`/access`} ><i className="bi bi-person-circle" ></i></Link>
          </>
        )}
        <Link className="navBtnStyle" to="/survey"><i className="bi bi-calendar-week"></i></Link>
        <Link className="navBtnStyle spaceBtnStyle" to="/map"><i className="bi bi-geo-alt"></i></Link>
        {isAuthenticated || userData.id !== undefined ? (
          <>
            <Link className="navBtnStyle" onClick={() => handleLogout()}><i className="bi bi-box-arrow-left"></i></Link>
          </>
        ) : ( 
          <>
          </>
          )}
        </div>
        <Link className="navBtnStyle spaceBtnStyle" to="/team"><i className="bi bi-bookmark-heart-fill"></i></Link>
      </div>
    </div>
  );
}