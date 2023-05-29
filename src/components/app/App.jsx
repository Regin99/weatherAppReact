import "./style.css";
import { InputCity } from "../inputcity/InputCity.jsx";
import { ForecastList } from "../forecastlist/ForecastList.jsx";
import React, { useState, useEffect } from "react";
import { Error } from "../error/Error.jsx";
import { Loading } from "../loading/Loading.jsx";
import { Map } from "../map/Map.jsx";
// import { CurrentWeather } from "../currentweather/CurrentWeather.jsx";

function App() {
  const [url, setUrl] = useState(
    "https://ipgeolocation.abstractapi.com/v1/?api_key=1e4c1422984d41aaab344eefe3482250"
  );
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");

  const getData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          setData(data);
          if ((data.lon !== undefined) & (data.lat !== undefined)) {
            setLoaded(true);
          } else if (
            data.longitude !== undefined &&
            data.latitude !== undefined
          ) {
            setUrl(
              `https://api.openweathermap.org/data/2.5/onecall?lat=${data.latitude}&lon=${data.longitude}&exclude=hourly,minutely&units=metric&appid=6dececf0197315bf6c4d5d5a89331432`
            );
            setCity(data.city);
          }
        },
        (error) => {
          setError(error);
          setLoaded(true);
        }
      );
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  const onSubmit = (city) => {
    setCity(city);
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=6dececf0197315bf6c4d5d5a89331432`
    )
      .then((response) => response.json())
      .then((data) => {
        setUrl(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=hourly,minutely&units=metric&appid=6dececf0197315bf6c4d5d5a89331432`
        );
      });
  };

  return error ? (
    <Error message={error.message} />
  ) : !loaded ? (
    <Loading className="App__loading" />
  ) : (
    <div className="App">
      <InputCity
        city={city}
        onSubmit={onSubmit}
        onLoaded={(flag) => {
          setLoaded(flag);
        }}
      />
      {/* <CurrentWeather data={data} /> */}
      <ForecastList data={data} loaded={loaded} />
      <Map lat={data.lat} lon={data.lon} />
    </div>
  );
}

export default App;
