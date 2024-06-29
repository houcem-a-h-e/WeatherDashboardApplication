
interface GeoCodeResponse {
  latitude: number;
  longitude: number;
}

export const getCoordinatesFromCity = async (city: string): Promise<GeoCodeResponse> => {
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  console.log(API_KEY);
  const response = await fetch(
    `https://geocode.maps.co/search?q=${city}&api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch coordinates for ${city}. Status: ${response.status}`);
  }

  const data = await response.json();
  if (!data || data.length === 0) {
    throw new Error(`No coordinates found for ${city}`);
  }

  return {
    latitude: parseFloat(data[0].lat),
    longitude: parseFloat(data[0].lon),
  };
};

export const fetchWeatherData = async (latitude: number, longitude: number, numberOfDays: number, temperatureUnit: string): Promise<any> => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,precipitation,rain,wind_speed_10m&hourly=temperature_2m,uv_index&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum&forecast_days=${numberOfDays}&temperature_unit=${temperatureUnit}`
);

  if (!response.ok) {
    throw new Error(`Failed to fetch weather data. Status: ${response.status}`);
  }

  const data = await response.json();

  const currentWeather = {
    temperature: data.current.temperature_2m,
    temperatureunit:data.current_units.temperature_2m,
    precipitation: data.current.precipitation,
    rain: data.current.rain,
    windSpeed: data.current.wind_speed_10m,
  };

  const dailyForecast = data.daily.time.map((time: string, index: number) => ({
    date: time,
    weatherCode: data.daily.weather_code[index],
    sunrise: data.daily.sunrise[index],
    sunset: data.daily.sunset[index],
    precipitationSum: data.daily.precipitation_sum[index],
    rainSum: data.daily.rain_sum[index],
    temperatureMax: data.daily.temperature_2m_max[index],
    temperatureMin: data.daily.temperature_2m_min[index],
  }));

  const hourlyForecast = data.hourly.time.map((time: string, index: number) => ({
    time: time,
    uvIndex: data.hourly.uv_index[index],
  }));

  return {
    currentWeather,
    dailyForecast,
    hourlyForecast,
  };
};