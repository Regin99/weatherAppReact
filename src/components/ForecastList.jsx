import React, { useEffect, useState } from "react";
import { ForecastItem } from "./ForecastItem.jsx";
import "./forecastStyles.css";
import { Error } from "./error/Error.jsx";
import { Loading } from "./loading/Loading.jsx";

export const ForecastList = (props) => {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [forecasts, setForecasts] = useState(null);

  const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=hourly,minutely&units=metric&appid=78839745a89023129881747e0b14fefd`;

  const sendRequest = async (url) => {
    await fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          setForecasts(data);
          setLoaded(true);
        },
        (error) => {
          setError(error);
          setLoaded(true);
        }
      );
  };

  useEffect(() => {
    sendRequest(weatherURL);
  }, [weatherURL]);

  return error ? (
    <Error message={error.message} />
  ) : !loaded ? (
    <Loading className="loading" />
  ) : (
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
};
