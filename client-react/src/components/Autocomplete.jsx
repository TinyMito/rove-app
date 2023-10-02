import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
} from 'react-places-autocomplete';

import { useNavigate } from 'react-router-dom';

import './Google.css';

export default function GoogleAutocomplete() {
  const [address, setAddress] = useState('');
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [id, setId] = useState(null);
  const [firstWordOfAddress, setFirstWordOfAddress] = useState('');

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);

    setAddress(value);
    setSelectedSuggestion(result[0]);
    const placeId = result[0].formatted_address;
    setId(placeId);

    // Extract the first word from formatted_address
    const firstWord = placeId.split(',')[0].toLowerCase().replace(/\s+/g, '-');
    setFirstWordOfAddress(firstWord);
  };

  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (selectedSuggestion) {
      console.log('Selected Suggestion:', selectedSuggestion);
      if (firstWordOfAddress) {
        navigate(`/cards/${firstWordOfAddress}`);
      } else {
        navigate('/card');
      }
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
