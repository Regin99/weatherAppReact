import React from "react";
import { ForecastItem } from "../foreactitem/ForecastItem.jsx";
import "./style.css";

export const ForecastList = (props) => {
  return props.loaded ? (
    <div className="forecast-list">
      <ForecastItem
        date={props.data["daily"][0]["dt"]}
        description={props.data["daily"][0]["weather"][0]["description"]}
        temp={props.data["daily"][0]["temp"]["day"]}
        icon={props.data["daily"][0]["weather"][0]["icon"]}
      />
      <ForecastItem
        date={props.data["daily"][1]["dt"]}
        description={props.data["daily"][1]["weather"][0]["description"]}
        temp={props.data["daily"][1]["temp"]["day"]}
        icon={props.data["daily"][1]["weather"][0]["icon"]}
      />
      <ForecastItem
        date={props.data["daily"][2]["dt"]}
        description={props.data["daily"][2]["weather"][0]["description"]}
        temp={props.data["daily"][2]["temp"]["day"]}
        icon={props.data["daily"][2]["weather"][0]["icon"]}
      />
    </div>
  ) : (
    <div></div>
  );
};
