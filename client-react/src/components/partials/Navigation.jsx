import { Button } from '@mui/material';

export default function Navigation() {

  return (
    <div className="Navigation">
      <div>
        <Button fullWidth={true} sx={{ color: '#CBDCFC', fontSize: '5em', marginBottom: '1em' }} href="/user/1" size="small"><i className="bi bi-person-circle"></i></Button>
        <Button fullWidth={true} sx={{ color: '#CBDCFC', fontSize: '5em' }} href="/" size="small"><i className="bi bi-house-fill"></i></Button>
        <Button fullWidth={true} sx={{ color: '#CBDCFC', fontSize: '5em' }} href="/survey" size="small"><i className="bi bi-suitcase2-fill"></i></Button>
        <Button fullWidth={true} sx={{ color: '#CBDCFC',fontSize: '5em' }} href="/schedule/1" size="small"><i className="bi bi-calendar2-week-fill"></i></Button>
        <Button fullWidth={true} sx={{ color: '#CBDCFC',fontSize: '5em' }} href="/place/1" size="small">1</Button>
        <Button fullWidth={true} sx={{ color: '#CBDCFC',fontSize: '5em' }} href="/google" size="small">2</Button>
        <Button fullWidth={true} sx={{ color: '#CBDCFC',fontSize: '5em' }} href="/duration" size="small">3</Button>
      </div>
    </div>
  );
}