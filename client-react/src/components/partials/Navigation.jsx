import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import appIcon from '../../assets/images/logo.png';
import '../../styles/Navigation.scss';

export default function Navigation({loggedIn, userImg, userId}) {
  console.log(loggedIn)
  return (
    <div className="Navigation">
      <div className="navFlex">
        <Link className="navBtnStyle" to="/"><img className="appIconStyle" src={appIcon} alt="Logo" /></Link>
        {loggedIn ? (
          <>
            <Link className="navBtnStyle" to={`/user/`}><img className="userIconStyle" src={`../${userImg}`} alt="Avatar" /></Link>
            <Link className="navBtnStyle userBtnStyle" to={`/logout/`}><i className="bi bi-box-arrow-left"></i></Link>
          </>
        ) : (
          <>
            <Link className="navBtnStyle" to={`/user/`} ><i className="bi bi-person-circle" ></i></Link>
            <Link className="navBtnStyle userBtnStyle" to={`/register/`}><i className="bi bi-person-plus"></i></Link>
          </>
        )}
        <Link className="navBtnStyle" to="/survey"><i className="bi bi-calendar-week"></i></Link>
       {/*  <Link className="navBtnStyle" to="/schedule/1"><i className="bi bi-calendar-week"></i></Link> */}
        <Link className="navBtnStyle" to="/map"><i className="bi bi-geo-alt"></i></Link>
        <Link className="navBtnStyle" to="/dev"><i className="bi bi-code-slash"></i></Link>
      </div>
    </div>
  );
}