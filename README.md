##  Simple Weather app

### About 

This app was created using REACT.JS framework with REACT HOOKS API, using Component-Based principles, Typescript, SASS.

Weather data is fetched from API https://openweathermap.org

### Features

Fetch weather data from api by user location using HTML5 Geolocation api or by city.
Input validation (if empty and non-alphanumeric character validation)
If error show error message


### Installation

First you have to download or cloned this repository to your computer, go to projects directory you have downloaded using terminal and run script : 'npm install'. After installation process is done and all required dependencies are installed run script 'npm start' to run the app in the development mode.

Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

API_KEY is required and must be inserted in working directory/src/App.tsx file otherwise app won't work;

const API_KEY : string = 'ENTER YOUR API';

Api can be aquired https://openweathermap.org
