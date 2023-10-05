import { Button } from '@mui/material';
import appIcon from '../../assets/images/logo.png';
import userIcon from '../../assets/images/avatar.png';

export default function Navigation() {

  const appIconStyle = {
    padding: '20px', 
    width: '80px',
    filter: 'drop-shadow(0.1rem 0.1rem 0.5rem rgba(80, 80, 80, 0.4))'
  }

  const userIconStyle = {
    padding: '20px', 
    width: '65px',
    filter: 'drop-shadow(0.1rem 0.1rem 0.5rem rgba(80, 80, 80, 0.4))',
    borderRadius: '1em'
  }

  const navBtnStyle = {
    color: '#D8ECE6 !important', 
    fontSize: '5em !important', 
    background: 'none !important',
    '&:hover': {
      color: '#FFF !important',
      background: 'none !important'
    }
  };

  const userBtnStyle = {
    marginBottom: '1em',
  }

  return (
    <div className="Navigation">
      <div>
        <img style={appIconStyle} src={appIcon} alt="Logo" />
        {/*<Button fullWidth={true} sx={{ ...navBtnStyle, ...userBtnStyle }} href="/user/1" size="small"><i className="bi bi-person-circle"></i></Button>*/}
        <Button fullWidth={true} sx={{ ...navBtnStyle, ...userBtnStyle }} href="/user/1" size="small"><img style={userIconStyle} src={userIcon} alt="Avatar" /></Button>
        <Button fullWidth={true} sx={navBtnStyle} href="/" size="small"><i className="bi bi-house-door"></i></Button>
        <Button fullWidth={true} sx={navBtnStyle} href="/survey" size="small"><i className="bi bi-suitcase2"></i></Button>
        <Button fullWidth={true} sx={navBtnStyle} href="/schedule/1" size="small"><i className="bi bi-calendar-week"></i></Button>
        <Button fullWidth={true} sx={navBtnStyle} href="/map" size="small"><i className="bi bi-geo-alt"></i></Button>
        <Button fullWidth={true} sx={navBtnStyle} href="/place/1" size="small">1</Button>
        <Button fullWidth={true} sx={navBtnStyle} href="/google" size="small">2</Button>
        <Button fullWidth={true} sx={navBtnStyle} href="/duration" size="small">3</Button>
      </div>
    </div>
  );
}