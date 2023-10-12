# Rove
Meet Rove, your passport to endless travel inspiration – discover, bookmark, and explore your dream destinations effortlessly.

## Tech Stack
* React 
* PostgresSQL
* ExpressJS
* SASS
* Leaflet
* GoogleMaps API
* BootStrap
* MaterialUI

## Team Members GitHub Links
* [Kevin](https://github.com/TinyMito) 
* [EunSoo](https://github.com/eunsookim1) 
* [Raymond](https://github.com/raylin98) 
* [Ahmed](https://github.com/Alhajahmed)

## Screenshot
![20231012_001264](https://github.com/TinyMito/rove-app/assets/75095713/9adc8fbf-cfa0-403a-93da-3e247baa0293)

## Colour Palette
<img width="720" alt="Rove" src="https://github.com/TinyMito/rove-app/assets/75095713/ea0b8050-6968-4fcf-88e4-387a01bc9f2b">

## App Logo
![logo](https://github.com/TinyMito/rove-app/assets/75095713/f3444c40-a0a5-4537-a8f9-8fb56060d866)

# Setup
## Node ^20
Make sure you're on Node ^20
```
nvm install ^20
nvm alias default ^20
```

## Clone Project
Do git clone this project to your directory:
```
git clone git@github.com:TinyMito/rove-app.git
```

## Install Project
Run this commands at the base project directory. Please ignore the severity vulnerabilities warnings and errors. Keep in mind please this repo contains both client `client-react` and server side `server-express`. You will need to install npm in both.
```
cd final-project
```
```
cd server-express && npm install && cd ../client-react && npm install && cd ../
```

## Google API Key is Required
[See here on how to get your personal Google Maps API key](https://developers.google.com/maps/documentation/embed/get-api-key)

**CORS issues will be fixed in the future update!**

1. Copy the `.env.example` and rename it to `.env`.
2. Copy and Paste your API Key into `REACT_APP_API_KEY=`.
3. Start the server-express `cd server-express && npm run local`. 
4. Start the client-react `cd client-react && npm start`.
5. Please install CORS Extension [FireFox](https://addons.mozilla.org/en-CA/firefox/addon/cors-unblock/?utm_content=addons-manager-reviews-link&utm_medium=firefox-browser&utm_source=firefox-browser) / [Chrome](https://chrome.google.com/webstore/detail/csp-unblock/lkbelpgpclajeekijigjffllhigbhobd) / [Edge](https://microsoftedge.microsoft.com/addons/detail/csp-unblock/ddjfnijclkbmemjealgjknemhhljclbo)
6. Navigate to [localhost:3000](http://localhost:3000/).

## Sources
* [React & Express Templates](https://github.com/gary-jipp/shell-react-express)
* [Avatar & Illutration](https://www.frebers.com/download/travelling-illustration-download)

# Notes
A Lighthouse Labs's Student Final Project.

## Stretched 
- Mobile Optimization.
- Rework backend for Mobile compliance.
- Rework Style Strutures.
- Rework Google API integration to avoid CORS issues.
