// MUI Components
import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography, useMediaQuery, Rating } from '@mui/material';
import { Link } from "react-router-dom";
import '../../styles/Team.scss';
import appIcon from '../../assets/images/logo.png';
import kevin from '../../assets/images/kevin.jpg';
import eunsoo from '../../assets/images/eunsoo.png';
import raymond from '../../assets/images/raymond.png';
import ahmed from '../../assets/images/ahmed.png';

// Axios, useEffect, useState, useParams
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// GLOBAL DATA: Import GlobalData function
import { globalData } from '../../GlobalData';

// Import Navigation & Header
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

export default function Dev() {
  // GLOBAL DATA: Add the useState const from globalData, ie. userData.id, userData.firstname etc
  const { userData, setUserData } = globalData();

  // EXAMPLE change user id in GLOBAL DATA
  const changeUser = (newUserId) => {
    setUserData({ ...userData, id: newUserId });
  };

  return (
    <div className="box"> 
      <div className="flex-row">
      <Navigation userImg={userData.userImg} />
        <div className="flex-column">
        {/* <Header userName={userData.userFirst} /> */}
          <div className="body about">
            {/* Your codes start here */}

            <section className="about-box-one">
              <div className="about-title">
                <div>Meet the minds behind the magic!</div>
              </div>
            </section>
            <section className="about-box-two">
              <div className="item-card">
                <div>
                  <Link to="https://github.com/TinyMito" target="_blank">
                    <CardMedia
                      component="img"
                      className="item-card-image"
                      alt="Kevin Ip"
                      image={kevin}
                      title="Kevin Ip"
                    />
                    <div className="item-card-caption">
                      <div className="caption-title">Kevin Ip</div>
                      <div className="caption-date">Developer</div>
                      <div className="caption-date">& Designer</div>
                    </div>
                  </Link>  
                </div>
              </div>
              <div className="item-card">
                <div>
                  <Link to="https://github.com/eunsookim1" target="_blank">
                    <CardMedia
                      component="img"
                      className="item-card-image"
                      alt="EunSoo Kim"
                      image={eunsoo}
                      title="EunSoo Kim"
                    />
                    <div className="item-card-caption">
                      <div className="caption-title">EunSoo Kim</div>
                      <div className="caption-date">Developer</div>
                      <div className="caption-date"></div>
                    </div>
                  </Link>  
                </div>
              </div>
              <div className="item-card">
                <div>
                  <Link to="https://github.com/raylin98" target="_blank">
                    <CardMedia
                      component="img"
                      className="item-card-image"
                      alt="Raymond Lin"
                      image={raymond}
                      title="Raymond Lin"
                    />
                    <div className="item-card-caption">
                      <div className="caption-title">Raymond Lin</div>
                      <div className="caption-date">Developer</div>
                      <div className="caption-date"></div>
                    </div>
                  </Link>  
                </div>
              </div>
              <div className="item-card">
                <div>
                  <Link to="https://github.com/Alhajahmed" target="_blank">
                    <CardMedia
                      component="img"
                      className="item-card-image"
                      alt="Ahmed Alhajahmed"
                      image={ahmed}
                      title="Ahmed Alhajahmed"
                    />
                    <div className="item-card-caption">
                      <div className="caption-title">Ahmed Alhajahmed</div>
                      <div className="caption-date">Developer</div>
                      <div className="caption-date"></div>
                    </div>
                  </Link>  
                </div>
              </div>
            </section>
            <section className="about-box-three">
              <img className="about-logo" src={appIcon}/>
              <div className="about-slogan">Explore!</div>
            </section>
            <section className="about-box-four">
              <div className="about-end">
                Embark on Your next epic journey with Rove!
              </div>
            </section>

            {/* Your codes end here */}
          </div>
        </div>
      </div>
    </div>
  );
}