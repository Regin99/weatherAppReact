import React from "react";
import "./style.css";

export const CurrentWeather = (props) => {
  console.log(props.data);

  return (
    <div className="current-weather">
      <div className="current-weather-container"></div>
      <div className="current-weather-container"></div>
    </div>
  );
};
