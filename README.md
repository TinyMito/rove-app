# Rove
Meet Rove, your passport to endless travel inspiration – discover, bookmark, and explore your dream destinations effortlessly.

## Tech stack
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
![20231012_001246](https://github.com/TinyMito/final-project/assets/75095713/ed1835b6-09cf-40ff-9072-a66563526ae8)
![20231012_001244](https://github.com/TinyMito/final-project/assets/75095713/363bc837-402e-4743-b0e2-e91f0804c798)
![20231012_001247](https://github.com/TinyMito/final-project/assets/75095713/7e79fea0-1c68-4a0a-b0b5-24afcb5e2f7e)

## Colour Palette
<img width="720" alt="Rove" src="https://github.com/TinyMito/final-project/assets/75095713/84adb162-4ab4-4b63-a78f-bf2213eb7f43">

## App Logo
![logo](https://github.com/TinyMito/final-project/assets/75095713/901fab2a-c393-4c79-a833-287d20e1b3d2)

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
git clone git@github.com:TinyMito/final-project.git
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

1. Copy the `.env.example` and rename it to `.env`.
2. Copy and Paste your API Key into `REACT_APP_API_KEY=`.
3. Start the server-express `cd server-express && npm run local`. 
4. Start the client-react `cd client-react && npm start`.
4. Navigate to [localhost:3000](http://localhost:3000/).

## Sources
* [React & Express Templates](https://github.com/gary-jipp/shell-react-express)
* [Avatar & Illutration](https://www.frebers.com/download/travelling-illustration-download)

# Notes
A Lighthouse Labs's Student Final Project.
