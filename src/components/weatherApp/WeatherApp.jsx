import "./weatherApp.style.css";
import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "../weatherCard/WeatherCard";

const WeatherApp = () => {
  const [temperature, setTemperature] = useState(0);
  const [description, setDescription] = useState("");
  const [feelsLikeTemp, setFeelsLikeStemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [searchCity, setSearchCity] = useState("");
  const [city, setCity] = useState("");

  const onClickHandler = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=imperial&appid=355cf3bff397cfe55bf144d10da9b2d8`
      );
      console.log("good", response);
      //set data
      setTemperature(response.data.main.temp);
      setDescription(response.data.weather[0].description);
      setFeelsLikeStemp(response.data.main.feels_like);
      setHumidity(response.data.main.humidity);
      setWind(response.data.wind.speed);
      setCity(response.data.name);
    } catch (error) {
      console.log("err", error);
    }
  };

  const onChangeHandler = (e) => {
    setSearchCity(e.target.value);
  };

  return (
    <div class="center">
      <div className="continer">
        <h3>Enter the city to check the weather</h3>
        <input
          placeholder="Enter the city"
          onChange={onChangeHandler}
          value={searchCity}
        />
        <button onClick={onClickHandler}> Get the weather</button>
        {city && (
          <WeatherCard
            city={city}
            humidity={humidity}
            description={description}
            feelsLikeTemp={feelsLikeTemp}
            wind={wind}
            temperature={temperature}
          />
        )}
      </div>
    </div>
  );
};
export default WeatherApp;
