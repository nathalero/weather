import axios from "axios";
import React, { useState } from "react";
import "./App.css";

export default function Search() {
  let [city, setCity] = useState("Panama");
  let [answer, setAnswer] = useState(false);
  let [weather, setWeather] = useState({});

  function displayInfo(response) {
    setAnswer(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleCity(event) {
    event.preventDefault();

    let apiKey = "f81614abe2395d5dfecd45b9298041de";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayInfo);
  }

  function searchCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="bar" onSubmit={handleCity}>
      <input
        type="search"
        placeholder="Search city"
        autoComplete="off"
        onChange={searchCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (answer) {
    return (
      <div>
        {form}
        <ul className="list">
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Wind: {Math.round(weather.wind)} Km/h</li>
          <li>Humidity: {Math.round(weather.humidity)} %</li>
          <li class="description">Description: {weather.description}</li>
          <li>
            <img src={weather.icon} alt="Icon of weather" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
