import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import appIcon from '../../assets/images/logo.png';
import userIcon from '../../assets/images/avatar.png';
import '../../styles/Navigation.scss';

export default function Navigation() {
  return (
    <div className="Navigation">
      <div className="navFlex">
        <Link className="navBtnStyle" to="/"><img className="appIconStyle" src={appIcon} alt="Logo" /></Link>
        {/*<i className="bi bi-person-circle"></i>*/}
        <Link className="navBtnStyle userBtnStyle" to="/user/1"><img className="userIconStyle" src={userIcon} alt="Avatar" /></Link>
        <Link className="navBtnStyle" to="/survey"><i className="bi bi-calendar-week"></i></Link>
       {/*  <Link className="navBtnStyle" to="/schedule/1"><i className="bi bi-calendar-week"></i></Link> */}
        <Link className="navBtnStyle" to="/map"><i className="bi bi-geo-alt"></i></Link>
        <Link className="navBtnStyle" to="/dev"><i className="bi bi-code-slash"></i></Link>
      </div>
    </div>
  );
}