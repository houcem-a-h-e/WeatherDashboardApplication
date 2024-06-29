Weather App
Overview
This Weather App is a web application designed to display weather forecasts based on user-selected parameters. It leverages modern web technologies and provides a seamless user experience.

Features
City Selection: Users can input a city name to fetch weather data.
Number of Days: Users can select the number of days for which they want weather forecasts.
Temperature Unit: Supports both Celsius and Fahrenheit temperature units.
Setup Process
To set up and run the Weather App locally, follow these steps:

Prerequisites
Node.js and npm installed on your machine.
Installation
Clone the repository from GitHub:

bash
Copier le code
git clone <repository_url>
cd weather-app
Install dependencies:

bash
Copier le code
npm install
Create a .env file at the root directory and add your API key obtained from https://geocode.maps.co/:

plaintext
Copier le code
REACT_APP_API_KEY=<your_api_key>
Running the Application
To start the development server and run the application:

bash
Copier le code
npm run dev
Open your browser and navigate to http://localhost:3000 to view the Weather App.

Assumptions Made
The application assumes that users will primarily use it to check weather forecasts for various cities.
The default settings include fetching weather data for Tunis on the first render, with a forecast for 10 days and displaying temperatures in Celsius.
Additional Notes
The app is built using Vite for fast development and optimized production builds.
Ensure that your API key in the .env file is kept confidential and not exposed in public repositories.
Deployment
To deploy the Weather App and share it with others, you can deploy it to a hosting service such as Vercel, Netlify, or GitHub Pages. Update the .env file with the appropriate API key for the production environment before deploying.