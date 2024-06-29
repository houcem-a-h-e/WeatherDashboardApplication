import React from 'react';
import './ForeCastWeather.css';
import sunriseIcon from '../../assets/images/sunrise.png';
import sunsetIcon from '../../assets/images/sundown.png';
import temperature from '../../assets/images/temperature.png';
import precipitation from '../../assets/images/precipitation.png';
import rain from '../../assets/images/rain.png';

type Props = {
  weatherData: any;
  loading: boolean;
  error: string | null;
};

const ForeCastWeather = ({ weatherData, loading, error }: Props) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="forecast-container">
      <h2>Forecast Weather for {weatherData.dailyForecast.length} 
        {weatherData.dailyForecast.length>1?" Days":" Day"}</h2>
      {weatherData && (
        <div className="forecast-grid">
          {weatherData.dailyForecast.map((day: any, index: number) => (
            <div key={index} className="forecast-card">
              <h3>{day.date}</h3>
              <p>Max <img className="imgIcon" src={temperature} alt="coat Icon"  /> {day.temperatureMax} {weatherData.currentWeather.temperatureunit}</p>
              <p>Min <img className="imgIcon" src={temperature} alt="coat Icon"  /> {day.temperatureMin} {weatherData.currentWeather.temperatureunit}</p>
              <p>Sunrise <img className="imgIcon" src={sunriseIcon} alt="coat Icon"  /> {day.sunrise.slice(11)}</p>
              <p>Sunset <img className="imgIcon" src={sunsetIcon} alt="coat Icon"  /> {day.sunset.slice(11)}</p>
              <p>Precipitation <img className="imgIcon" src={precipitation} alt="coat Icon"  /> {day.precipitationSum}mm</p>
              <p>Rain <img className="imgIcon" src={rain} alt="coat Icon"  /> {day.rainSum}mm</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ForeCastWeather;
