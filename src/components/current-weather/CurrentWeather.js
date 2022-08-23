import React from "react";

import "./CurrentWeather.css";

const CurrentWeather = ({ weatherData }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{weatherData.city}</p>
          <p className="weather-desc">{weatherData.weather[0].description}</p>
        </div>
        <img src={`icons/${weatherData.weather[0].icon}.png` } alt="weather" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(weatherData.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">{weatherData.main.feels_like}°C</span>{" "}
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{Math.round(weatherData.wind.speed)}km/s</span>{" "}
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{Math.round(weatherData.main.humidity)}%</span>{" "}
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{weatherData.main.pressure}hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
