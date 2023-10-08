import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
} from 'react-places-autocomplete';
import { useNavigate } from 'react-router-dom';
import './Google.css';

// Import Navigation & Header
import Navigation from './partials/Navigation';
import Header from './partials/Header';

export default function GoogleAutocomplete() {
  const [address, setAddress] = useState('');
  const [locationInfo, setLocationInfo] = useState(null);

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
    setAddress(value);
    setLocationInfo(result[0]);
  };

  const placeId = locationInfo?.place_id
  const locationName = locationInfo?.formatted_address;

  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (locationInfo) {
      console.log('Selected location info:', locationInfo);
      if (placeId) {
        navigate(`/card/${locationName}/${placeId}`);
      } else {
        navigate('/card');
      }
    }
  };

  return (
    <div className="box"> 
      <div className="flex-row">
        <Navigation />
        <div className="flex-column">
          <Header />
          <div className="body">
            {/* Your codes start here */}

      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <p>Suggestion Results:</p>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                const style = suggestion.active
                  ? {
                      backgroundColor: '#fafafa',
                      cursor: 'pointer',
                      border: 'solid 2px black',
                      margin: '.5em',
                    }
                  : {
                      backgroundColor: '#ffffff',
                      cursor: 'pointer',
                      border: 'solid 2px black',
                      margin: '.5em',
                    };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <button onClick={handleButtonClick}>Submit</button>
      
            {/* Your codes end here */}
            </div>
        </div>
      </div>
    </div>
  );
}
