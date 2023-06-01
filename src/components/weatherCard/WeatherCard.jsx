import React from "react";
import "./weatherCard.style.css";

const WeatherCard = (props) => {
  const { city, temperature, description, feelsLikeTemp, humidity, wind } =
    props;

  return (
    <div className="card">
      <div className="box">
        <p className="temperature"> {temperature}ºC</p>
        <div className="info">
          <p> City: {city} </p>

          <p> Description: {description}</p>
          <p> Feels like:{feelsLikeTemp}</p>
          <p> Humidity: {humidity}</p>
          <p> Wind: {wind}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
