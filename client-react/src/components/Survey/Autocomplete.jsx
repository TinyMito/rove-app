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

import React, { useState } from 'react';
import axios from 'axios';
import PlacesAutocomplete, {
  geocodeByAddress,
} from 'react-places-autocomplete';
import { useNavigate } from 'react-router-dom';
import '../../styles/Google.scss';
import { useAuthentication } from 'useAuthentication';

// GLOBAL DATA: Import GlobalData function
import { globalData } from '../../GlobalData';

// Import Navigation & Header
import Navigation from '../partials/Navigation';
import Header from '../partials/Header';

export default function GoogleAutocomplete() {
  // Requires the user to be logged in
  const isAuthenticated = useAuthentication();

  // GLOBAL DATA: Add the useState const from globalData, ie. userData.id, userData.firstname etc
  const { userData, setUserData } = globalData();

  const [address, setAddress] = useState('');
  const [locationInfo, setLocationInfo] = useState(null);

  // Message + Disabled Button
  const [entrySelected, setEntrySelected] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
    setAddress(value);
    setLocationInfo(result[0]);
    setEntrySelected(true); // Set the entrySelected state to true when an entry is selected
    setButtonDisabled(false); // Enable the submit button when an entry is selected
  };

  const placeId = locationInfo?.place_id
  const locationName = locationInfo?.formatted_address;

  const navigate = useNavigate();

const handleButtonClick = async () => {
  //console.log("CODE:", placeId);
  //console.log("NAME:", locationName);

  if (locationInfo) {
    //console.log('Selected location info:', locationInfo);

    // Return a promise from the function
    try {
      const response = await axios
        .post('/api/destination', {
          google_destination_id: placeId,
          name: locationName,
        });
      const destinationId = response.data.destinationId;
      const destinationId_1 = destinationId;
      if (placeId) {
        // Now that we have the destinationId, we can call updateSchedule
        updateSchedule(userData.scheduleId, destinationId_1);
        navigate(`/card/${locationName}/${placeId}`);
      } else {
        navigate('/card');
      }
    } catch (error) {
      console.error('Error inserting destination:', error);
    }

      setButtonDisabled(false);
  } else {
    return Promise.reject(new Error('Location info is missing.'));
  }
};

const updateSchedule = async (scheduleId, destinationId) => {
  // Take the destination ID and update the schedules table
  axios
    .put('/api/schedule', {
      scheduleId,
      destinationId,
    })
    .then((response) => {
      //console.log('Schedule updated with ID:', response.data);
    })
    .catch((error) => {
      console.error('Error updating schedule:', error);
    });
};

  return (
    <div className="box"> 
      <div className="flex-row">
      <Navigation isAuthenticated={isAuthenticated} userImg={userData.userImg} />
        <div className="flex-column">
        <Header isAuthenticated={isAuthenticated} userName={userData.userFirst} />
          <div className="body">
            {/* Your codes start here */}

            <div className="h1-flex">
              <h1>Which city would you like to visit?</h1>
              <Button className="navBtn" size="large" href="/survey">Start Over</Button>
            </div>
            
              <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
              >

                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <div>
                      <TextField
                        fullWidth={true}
                        id="outlined-required"
                        label="Type to start searching places!"
                        {...getInputProps({
                          placeholder: 'Search Places ...',
                          className: 'location-search-input',
                        })}
                      />
                    </div>
                    <div className="autocomplete-dropdown-container">

                      {loading && <div>Loading...</div>}

                      {suggestions.map((suggestion, index) => {
                        const suggestionKey = `suggestion_${index}`;
                        const className = suggestion.active
                          ? 'suggestion-item--active'
                          : 'suggestion-item';

                        return (
                          <Button
                            key={suggestionKey}
                            size="large"
                            variant="contained"
                            {...getSuggestionItemProps(suggestion, {
                              className
                            })}
                          >
                            {suggestion.description}
                          </Button>
                        );
                      })}
                      
                    </div>
                  </div>
                )}

              </PlacesAutocomplete>

              {entrySelected ? null : (
                <div className="message">
                  Please select an entry.
                </div>
              )}
              
              <Button fullWidth={true} size="large" onClick={handleButtonClick} disabled={buttonDisabled}>Submit</Button>
      
            {/* Your codes end here */}
            </div>
        </div>
      </div>
    </div>
  );
}
