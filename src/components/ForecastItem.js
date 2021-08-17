import moment from "moment";
import React from "react";
import "./forecastStyles.css";

export const ForecastItem = (props) => {
  const icon = `./assets/${props.icon}.svg`;

  const date = moment(props.date * 1000).format("DD.MM");

  return (
    <div className="forecast-item">
      <p className="forecast-item-date">{date}</p>
      <img className="icon" alt="icon" src={icon} />
      <p className="forecast-item-description">{props.description}</p>
      <div className="forecast-item-content">{Math.round(props.temp)}°</div>
    </div>
  );
};
