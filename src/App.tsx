import { useState, useEffect } from 'react';
import TodayWeather from './components/TodayWeather/TodayWeather';
import ForeCastWeather from './components/ForeCastWeather/ForeCastWeather';
import Navbar from './components/Navabr/Navbar';
import { getCoordinatesFromCity, fetchWeatherData as fetchWeatherDataFromApi } from './api/api';

function App() {
  const [city, setCity] = useState("Tunis");
  const [unit, setUnit] = useState("celsius");
  const [numberOfDays, setNumberOfDays] = useState(10);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInitialWeatherData = async () => {
      try {
        setLoading(true);
        const res = await getCoordinatesFromCity(city);
        const data = await fetchWeatherDataFromApi(res.latitude, res.longitude, numberOfDays, unit);
        setWeatherData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialWeatherData();
  }, [city, numberOfDays, unit]);

  const fetchWeatherData = async (newCity: string, newUnit: string, newNumberOfDays: number) => {
    try {
      setLoading(true);
      const res = await getCoordinatesFromCity(newCity);
      const data = await fetchWeatherDataFromApi(res.latitude, res.longitude, newNumberOfDays, newUnit);
      setWeatherData(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar
        city={city}
        setCity={setCity}
        unit={unit}
        setUnit={setUnit}
        numberOfDays={numberOfDays}
        setNumberOfDays={setNumberOfDays}
        fetchWeatherData={fetchWeatherData}
      />
      <TodayWeather city={city} unit={unit} />
      <ForeCastWeather weatherData={weatherData} loading={loading} error={error} />
    </>
  );
}

export default App;