import "./weatherApp.style.css";
import React from "react";
// import AcUnitIcon from "@mui/icons-material/AcUnit";

const WeatherApp = () => {
  const onClickHandler = async () => {
    console.log("on click works");
  };

  return (
    <div className="continer">
      <button onClick={onClickHandler}> Get the weather</button>
    </div>
  );
};

export default WeatherApp;
