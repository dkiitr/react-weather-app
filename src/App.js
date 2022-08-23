import { useState } from "react";
import { Weather_API_KEY, Weather_API_URL } from "./api";
import "./App.css";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Forecast from "./components/forecast/Forecast";
import Search from "./components/search/Search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const searchChangeHandler = (searchData) => {
    // console.log(searchData);

    const [lat, lon] = searchData.value;

    const currentWeatherFetch = fetch(
      `${Weather_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${Weather_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${Weather_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${Weather_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={searchChangeHandler} />
      {currentWeather && <CurrentWeather weatherData={currentWeather} />}
      {forecast && <Forecast forecastData={forecast} />}
    </div>
  );
}

export default App;
