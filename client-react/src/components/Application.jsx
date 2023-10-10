import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/Application.scss';

import appIcon from '../assets/images/logo.png';
import screenshotOne from '../assets/images/screenshot.png';

export default function Home() {
  // Universal scroll position state here
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // get windows.scrollY DOM
      setScroll(window.scrollY);
    };

    // Listener for the user scroll position on changes
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Initial setup value before effect changes
  const initialFade = 1;
  const initialMove = 0;

  // Math here
  const fadeOut = Math.min( // Fading function
    initialFade - (scroll / 500)
  );

  const moveUp = Math.min( // Move function
    initialMove - (scroll / 2)
  )

  // Effect CSS here
  const scrollStyleOne = {
    opacity: fadeOut,
    top: moveUp + 'px'
  };

  // Button to screen to next section
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing">
      <section id="section-one" className="box-one">
        <div className="centered-content column-two" style={scrollStyleOne}>
          <img className="app-logo" src={appIcon} alt="Logo"/>
          <div className="app-slogan">
            <span>Welcome to</span><br />
            <span className="plus">Rove!</span>
          </div>
        </div>
        <div style={scrollStyleOne} className="scrollBtn">
          <Link className="scrollBtn" onClick={() => scrollToSection('section-two')} >
            <i className="bi bi-caret-down"></i>
          </Link>
        </div>
      </section>
      <section id="section-two" className="box-two">
        <img className="app-summaryImage" src="./header.png"/>
        <div className="app-summary">
          <span>Meet Rove, your passport to endless travel inspiration – discover, bookmark, and explore your dream destinations effortlessly.</span>
        </div>
      </section>
      <section id="section-three" className="box-three">
          <Link className="enterBtn" to="/about">Explore<i className="bi bi-caret-right"></i></Link>
          <img className="app-screenshot" src={screenshotOne} alt="App"/>
      </section >
      <footer className="box-footer">
        © 2023 Rove<br/>
        A Lighthouse Labs's final project by students:
        Kevin, EunSoo, Raymond and Ahmed
      </footer>
    </div>
  );
}