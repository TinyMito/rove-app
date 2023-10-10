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
import { useNavigate, useLocation } from "react-router-dom";

// GLOBAL DATA: Import GlobalData function
import { globalData } from '../../GlobalData';

// Import Navigation & Header
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

export default function AuthForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const message = location.state?.isLoggedOut;

  // GLOBAL DATA: Add the useState const from globalData, ie. userData.id, userData.firstname etc
  const { userData, setUserData, fetchUserData } = globalData();

  const [isLoginMode, setIsLoginMode] = useState(true);

  // MUI Password Show Function
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLoginMode) {
        // Handle login
        const response = await axios.post("/api/login", formData);
        // Update the global data
        fetchUserData();
        // Redirect upon successful login
        navigate("/user");
      } else {
        // Handle registration
        const response = await axios.post("/api/register", formData);
        // Update the global data
        fetchUserData();
        // Redirect upon successful registration
        navigate("/user");
      }
    } catch (error) {
      console.error(isLoginMode ? "Login failed:" : "Registration failed:", error);
    }
  };

  const toggleMode = () => {
    setIsLoginMode((prevMode) => !prevMode); // Toggle between login and registration mode
  };

  return (
    <div className="box">
      <div className="flex-row">
        <Navigation loggedIn={userData.loggedIn} userId={userData.id} userImg={userData.userImg} />
        <div className="flex-column">
          <Header userName={userData.userName} />
          <div className="body">
            {/* Your code starts here */}

              {message && (
                <>
                  <span className="message">You have successfully logged out!</span>
                </>
              )}

              {isLoginMode ? (
                <>
                  <h1>Login</h1>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>

                  <FormControl sx={{ m: 1 }} variant="outlined">
                    <TextField
                      required
                      id="outlined-required"
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      required
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

                  </div>

                  <h3>
                    Don't have an account?{" "}
                    <a onClick={toggleMode}>Register</a>
                  </h3>

                </>
              ) : (
                <>
                  <h1>Register Today!</h1>

                  <div className="info-box">
                    <h3>
                      Already have an account? <a onClick={toggleMode}>Login</a>
                    </h3>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>

                  <h3>Your Public Username</h3>

                    <FormControl sx={{ m: 1 }} variant="outlined">
                      <TextField
                        required
                        id="outlined-required username"
                        label="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                      />
                    </FormControl>  

                    <h3>Contact Information</h3>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <FormControl sx={{ m: 1 }} variant="outlined">
                        <TextField
                          required
                          id="outlined-required firstname"
                          label="First Name"
                          name="firstname"
                          value={formData.firstname}
                          onChange={handleChange}
                        />
                      </FormControl>      

                      <FormControl sx={{ m: 1 }} variant="outlined">
                        <TextField
                          required
                          id="outlined-required lastname"
                          label="Last Name"
                          name="lastname"
                          value={formData.lastname}
                          onChange={handleChange}
                        />
                      </FormControl>      
                    </div>
                    <FormControl sx={{ m: 1 }} variant="outlined">
                      <TextField
                        required
                        id="outlined-required email"
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </FormControl>      

                    <FormControl sx={{ m: 1}} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                      <OutlinedInput
                        required
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

                    <h3>Select Avatar (optional)</h3>
                    <FormControl sx={{ m: 1 }} variant="outlined">
                      <TextField
                        id="outlined-required avatar"
                        label="Avatar"
                        name="avatar"
                        value={formData.avatar}
                        onChange={handleChange}
                      />
                    </FormControl>      

                    <Button onClick={handleSubmit} variant="text">Register</Button>

                  </div>
                </>
              )}

            {/* Your code ends here */}
          </div>
        </div>
      </div>
    </div>
  );
}
