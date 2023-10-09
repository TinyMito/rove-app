// MUI Components
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// GLOBAL DATA: Import GlobalData function
import { globalData } from '../../GlobalData';

// Import Navigation & Header
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

export default function LoginForm() {
  // GLOBAL DATA: Add the useState const from globalData, ie. userData.id, userData.firstname etc
  const { userData, setUserData } = globalData();

  // MUI Password Show Function
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => event.preventDefault();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", formData);
      //console.log(response.data.token);
      // Redirect upon successful login
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="box"> 
      <div className="flex-row">
        <Navigation loggedIn={userData.loggedIn} userId={userData.id} userImg={userData.userImg} />
        <div className="flex-column">
          <Header userName={userData.userName} />
          <div className="body">
            {/* Your codes start here */}    


            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <TextField
                required
                id="outlined-required"
                label="Required"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </FormControl>

            <Button onClick={handleSubmit} variant="text">Login</Button>


              {/* <form onSubmit={handleSubmit}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button type="submit">Login</button>
              </form> */}

          </div>
        </div>
      </div>
    </div>
    
  );
}
