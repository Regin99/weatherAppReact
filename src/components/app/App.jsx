import "./App.css";
import { InputCity } from "../inputcity/InputCity.jsx";
import { ForecastList } from "../forecastlist/ForecastList.jsx";
import React, { useState, useEffect } from "react";
import { Error } from "../error/Error.jsx";
import { Loading } from "../loading/Loading.jsx";

function App() {
  const geolocationURL =
    "https://ipgeolocation.abstractapi.com/v1/?api_key=0114551861ca4ad5b222750b725754a6";

  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [latitude, setLatitude] = useState(data.latitude);
  const [longitude, setLongitude] = useState(data.longitude);

  const sendRequest = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          setData(data);
          if (data.longitude && data.latitude) {
            setLongitude(data.longitude);
            setLatitude(data.latitude);
          } else if (data[0].lat && data[0].lon) {
            setLongitude(data[0].lon);
            setLatitude(data[0].lat);
          }
          setLoaded(true);
        },
        (error) => {
          setError(error);
          setLoaded(true);
        }
      );
  };

  useEffect(() => {
    sendRequest(geolocationURL);
  }, []);

  const onSubmit = (city) => {
    sendRequest(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=78839745a89023129881747e0b14fefd`
    );
  };

  return error ? (
    <Error message={error.message} />
  ) : !loaded ? (
    <Loading className="App__loading" />
  ) : (
    <div className="App">
      <InputCity city={data.city} onSubmit={onSubmit} />
      <ForecastList lat={latitude} lon={longitude} loaded={loaded} />
    </div>
  );
}

export default App;
