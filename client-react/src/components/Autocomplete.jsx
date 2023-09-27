import React, { useState } from 'react'
import '../App.css'


export default function Autocomplete () {

  const [value, setValue] = useState('')
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event) => {
    setValue(event.target.value)
  };

  const onSearch = () => {
    //our api  fetch search result
    const api= `https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&apiKey=1d6beb28882348cdaf8aff600b04f562`
    console.log( 'search ', value);
  
    fetch(api)
    .then ((response) => response.json())
    .then ((data) => {
      const locations = data.features.map((feature) => feature.properties.formatted);
      setSuggestions(locations)
    })
    .catch((error) => console.log(error))
  }

  return (
    <div className="App">
      <h1>Where do you want to go?</h1>
      <div className="search-container">
        <div>
          <input
            type="text"
            placeholder="Type something here"
            value={value}
            onChange={onChange}
          ></input>
          <button onClick={onSearch} >Click here</button>
        </div>
      </div>
      <div>
        <h1>Suggested:</h1>
        {suggestions.map((location, name) => (
          <div className="dropdown-row" key={name}>
            {location}
          </div>
        ))}
      </div>
    </div>
  );
}