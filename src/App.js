import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/search/current-weather/current-weather';
import { METEO_API_URL, METEO_API_KEY } from "./api"
import { useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [plannedWeather, setPlannedWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${METEO_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${METEO_API_KEY}&lang=fr`);
    const plannedWeatherFetch = fetch(`${METEO_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${METEO_API_KEY}&lang=fr`)

    Promise.all([currentWeatherFetch, plannedWeatherFetch])
      .then(async (response) => {
        const currentWeatherResponse = await response[0].json();
        const plannedWeatherResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...currentWeatherResponse });
        setPlannedWeather({ city: searchData.label, ...plannedWeatherResponse });
      })
      .catch((err) => console.log(err));

  }

  console.log(currentWeather);
  console.log(plannedWeather);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
