import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import './Google.css'

export default function GoogleAutocomplete() {
  const [address, setAddress] = useState('');
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
    console.log(result);

    setAddress(value);
    setSelectedSuggestion(result[0]); // Store the selected suggestion
  };

  const handleButtonClick = () => {
    if (selectedSuggestion) {
      // Use the selected suggestion data as needed
      console.log('Selected Suggestion:', selectedSuggestion);

      // You can perform additional actions with the selected suggestion here
    }
  };

  return (
    <div className="App">
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
                // inline style for demonstration purpose
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
    </div>
  );
}
