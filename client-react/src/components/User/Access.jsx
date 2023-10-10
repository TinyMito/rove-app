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
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import '../../styles/Access.scss';

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

  // GLOBAL DATA: Add the useState const from globalData, ie. userData.id, userData.firstname etc
  const { userData, setUserData, fetchUserData } = globalData();

  // Avatar
  const [isAvatarDialogOpen, setIsAvatarDialogOpen] = useState(false);

  const handleOpenAvatarDialog = () => {
    setIsAvatarDialogOpen(true);
  };
  
  const handleCloseAvatarDialog = () => {
    setIsAvatarDialogOpen(false);
  };
  
  const handleSelectAvatar = (avatarUrl) => {
    setFormData({ ...formData, avatar: avatarUrl });
    handleCloseAvatarDialog();
  };

  const avatarOptions = [
    'avatar00.png',
    'avatar01.png',
    'avatar02.png',
    'avatar03.png',
    'avatar04.png',
    'avatar05.png',
    'avatar06.png',
    'avatar07.png',
    'avatar08.png',
  ];

  // Error Message or Message
  const [errorMessage, setErrorMessage] = useState("");
  const message = location.state?.isLoggedOut;
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
    passwordConfirmation: "",
    avatar: "",
  });

  const [isFormReady, setIsFormReady] = useState(false);
  const [isRegisterFormReady, setIsRegisterFormReady] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Check if both email and password are not empty
    if (formData.email && formData.password) {
      setIsFormReady(true);
    } else {
      setIsFormReady(false);
    }

    // Check if all required fields in the registration form are filled
    if (name === "password" || name === "passwordConfirmation") {
      // Check if both password fields match
      if (formData.password === formData.passwordConfirmation) {
        setIsRegisterFormReady(true); // Enable registration button if passwords match
      } else {
        setIsRegisterFormReady(false); // Disable registration button if passwords don't match
      }
    } else {
      // Check if all other required fields are filled
      if (formData.username && formData.firstname && formData.lastname && formData.email && formData.password) {
        setIsRegisterFormReady(true);
      } else {
        setIsRegisterFormReady(false);
      }
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Remove passwordConfirmation state
    const registrationData = { ...formData };
    delete registrationData.passwordConfirmation;

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
        const response = await axios.post("/api/register", registrationData);
        // Update the global data
        fetchUserData();
        // Redirect upon successful registration
        navigate("/user");
      }
    } catch (error) {
      console.error(isLoginMode ? "Login failed:" : "Registration failed:", error);
      if (isLoginMode) {
        setErrorMessage("Login failed. Please check your credentials.");
      } else {
        setErrorMessage("Registration failed. Please fill all the required field.");
      }
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

            {message || errorMessage ? (
              <span className="message">
                {errorMessage ? errorMessage : "You have successfully logged out!"}
              </span>
            ) : null}

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

                  <Button 
                    onClick={handleSubmit} 
                    variant="text" 
                    disabled={!isFormReady}
                    sx={{margin: '20px', padding: '10px'}}
                  >Login</Button>

                  </div>

                  <h3>
                    Don't have an account? 
                    <Button sx={{margin: '20px', padding: '10px'}} size="large" onClick={toggleMode}>Click here to register today!</Button>
                  </h3>

                </>
              ) : (
                <>
                  <h1>Register Today!</h1>

                  <h3>
                    Already have an account?
                    <Button sx={{margin: '20px', padding: '10px'}} size="large" onClick={toggleMode}>Click here to login!</Button>
                  </h3>

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

                    <FormControl sx={{ m: 1 }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password-confirmation">Enter the Password Again</InputLabel>
                      <OutlinedInput
                        required
                        id="outlined-adornment-password-confirmation"
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
                        label="Confirm Password"
                        name="passwordConfirmation"
                        value={formData.passwordConfirmation}
                        onChange={handleChange}
                      />
                    </FormControl>

                    <h3>Select Avatar</h3>
                    <Button onClick={handleOpenAvatarDialog} variant="outlined" sx={{margin: '20px', padding: '10px'}}>
                      Select your avatar
                    </Button>

                    <FormControl sx={{ m: 1 }} variant="outlined">
                      <TextField
                        disabled     
                        sx={{margin: '0px 20px 50px 20px'}}
                        variant="filled"
                        id="outlined-required avatar"
                        label="Avatar"
                        name="avatar"
                        value={formData.avatar}
                        onChange={handleChange}
                      />
                    </FormControl>
                    
                    <Dialog
                      open={isAvatarDialogOpen}
                      onClose={handleCloseAvatarDialog}
                    >
                      <DialogTitle>Select your avatar</DialogTitle>
                      <DialogContent>
                        <div className="avatar-selection-box">
                          {avatarOptions.map((avatarUrl, index) => (
                            <img
                              key={index}
                              className="avatar-selection"
                              src={avatarUrl}
                              alt={`Avatar ${index}`}
                              onClick={() => handleSelectAvatar(avatarUrl)}
                              style={{ cursor: 'pointer' }}
                            />
                          ))}
                        </div>
                      </DialogContent>
                      <DialogActions>
                        <Button size="large" onClick={handleCloseAvatarDialog} color="primary">
                          Cancel
                        </Button>
                      </DialogActions>
                    </Dialog>   

                    <Button disabled={!isRegisterFormReady} onClick={handleSubmit} variant="text" sx={{margin: '20px', padding: '10px'}}>Register</Button>

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
