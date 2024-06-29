import React from 'react';
import { useEffect, useState } from "react";
import { getCoordinatesFromCity, fetchWeatherData } from "../../api/api";
import './TodayWeather.css';
import sunriseIcon from '../../assets/images/sunrise.png';
import sunsetIcon from '../../assets/images/sundown.png';
import temperature from '../../assets/images/temperature.png';
import precipitation from '../../assets/images/precipitation.png';
import wind from '../../assets/images/wind.png';
import rain from '../../assets/images/rain.png';
import coat from '../../assets/images/coat.png';


type Props = {
  city: string;
  unit: string;
};

const TodayWeather = ({ city, unit }: Props) => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getCoordinatesFromCity(city);
        const data = await fetchWeatherData(res.latitude, res.longitude, 1, unit);
        setWeatherData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, unit]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="todayweather">
      <h2 className="title">Today's Weather in <span>{city}</span></h2>
      {weatherData && (
        <div className="subelements">
          {weatherData.dailyForecast.map((day: any, index: number) => (
            <div key={index} className="forecast-day">
              <div className="leftinfos">
                {weatherData.currentWeather.temperatureunit==="°C" &&
                weatherData.currentWeather.temperature>15 &&(
                  <div>
                    <img src={sunriseIcon} alt="Sunrise Icon" className="icontoday" />
                  </div>
                )}
                {weatherData.currentWeather.temperatureunit==="°F" &&
                weatherData.currentWeather.temperature>59 &&(
                  <div>
                    <img src={sunriseIcon} alt="Sunrise Icon" className="icon" />
                  </div>
                )}
                {weatherData.currentWeather.temperatureunit==="°C" &&
                weatherData.currentWeather.temperature<=15 &&(
                  <div>
                    <img src={coat} alt="coat Icon" className="icon" />
                  </div>
                )}
                {weatherData.currentWeather.temperatureunit==="°F" &&
                weatherData.currentWeather.temperature<=59 &&(
                  <div>
                    <img src={coat} alt="coat Icon" className="icon" />
                  </div>
                )}
                {weatherData.currentWeather.temperatureunit==="°C" &&
                weatherData.currentWeather.temperature<=15 &&
                weatherData.currentWeather.rain>1 &&
                (
                  <div>
                    <img src={rain} alt="rain Icon" className="icon" />
                  </div>
                )}
                {weatherData.currentWeather.temperatureunit==="°F" &&
                weatherData.currentWeather.temperature<=59 &&
                weatherData.currentWeather.rain>1 &&
                (
                  <div>
                    <img src={rain} alt="rain Icon" className="icon" />
                  </div>
                )}
                <p>Date: {day.date}</p>
                <p>{city}</p>
                
                
              </div>
              <div className="weather-details">
                <div className="dual">
                  <div className="individualelment">
                    <img src={sunriseIcon} alt="Sunrise Icon" className="icon" />
                    <p>Sunrise: {day.sunrise.slice(11)}</p>
                  </div>
                  <div className="individualelment">
                    <img src={sunsetIcon} alt="Sunrise Icon" className="icon" />
                    <p>Sunset: {day.sunset.slice(11)}</p>

                  </div>
                  
                </div>
                
                <div className="temperatureandprecipitation">
                  <div className="individualelment">
                    <img src={temperature} alt="temperature Icon" className="icon" />
                    <p>Current Temperature: {weatherData.currentWeather.temperature}{weatherData.currentWeather.temperatureunit}</p>
                  </div>
                  <div className="individualelment">
                    <img src={precipitation} alt="precipitation Icon" className="icon" />
                    <p>Current Precipitation: {weatherData.currentWeather.precipitation}mm</p>
                  </div>
                  
                  <div className="grid-item">
                  </div>
                </div>
                <div className="temperatureandprecipitation">
                  <div className="individualelment">
                    <img src={rain} alt="rain Icon" className="icon" />
                    <p>Current Rain: {weatherData.currentWeather.rain}mm</p>               
                  </div>
                  <div className="individualelment">
                    <img src={wind} alt="wind Icon" className="icon" />
                    <p>Current Wind Speed: {weatherData.currentWeather.windSpeed}km/h</p>              
                  </div>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodayWeather;
