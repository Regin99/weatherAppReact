import React, { useEffect, useState } from "react";
import { ForecastItem } from "./ForecastItem";
import "./forecastStyles.css";

export const ForecastList = (props) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [forecasts, setForecasts] = useState(null);

  const sendRequest = async (url) => {
    await fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          setLoading(true);
          setForecasts(data);
        },
        (error) => {
          setError(error);
          setLoading(true);
        }
      );
  };
  const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=hourly,minutely&units=metric&appid=78839745a89023129881747e0b14fefd`;

  useEffect(() => {
    if (props.lat !== undefined && props.lon !== undefined) {
      sendRequest(weatherURL);
    }
  }, [weatherURL, props.lat, props.lon]);

  if (error) {
    return <h1 className="message">Error: {error.message}</h1>;
  } else if (!loading) {
    return <div className="message">Loading...</div>;
  } else if (forecasts) {
    return (
      <div className="forecast-list">
        <ForecastItem
          date={forecasts["daily"][0]["dt"]}
          description={forecasts["daily"][0]["weather"][0]["description"]}
          temp={forecasts["daily"][0]["temp"]["day"]}
          icon={forecasts["daily"][0]["weather"][0]["icon"]}
        />
        <ForecastItem
          date={forecasts["daily"][1]["dt"]}
          description={forecasts["daily"][1]["weather"][0]["description"]}
          temp={forecasts["daily"][1]["temp"]["day"]}
          icon={forecasts["daily"][1]["weather"][0]["icon"]}
        />
        <ForecastItem
          date={forecasts["daily"][2]["dt"]}
          description={forecasts["daily"][2]["weather"][0]["description"]}
          temp={forecasts["daily"][2]["temp"]["day"]}
          icon={forecasts["daily"][2]["weather"][0]["icon"]}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
};
