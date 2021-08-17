import "./App.css";
import { InputCity } from "./components/InputCity.js";
import { ForecastList } from "./components/ForecastList.js";
import React, { useState, useEffect } from "react";

function App() {
  const geolocationURL =
    "https://ipgeolocation.abstractapi.com/v1/?api_key=0114551861ca4ad5b222750b725754a6";

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const sendRequest = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          setLoading(true);
          setData(data);
          if (data.longitude && data.latitude) {
            setLongitude(data.longitude);
            setLatitude(data.latitude);
          } else if (data[0].lat && data[0].lon) {
            setLongitude(data[0].lon);
            setLatitude(data[0].lat);
          }
        },
        (error) => {
          setError(error);
          setLoading(true);
        }
      );
  };

  useEffect(() => {
    sendRequest(geolocationURL);
  }, []);

  const [latitude, setLatitude] = useState(data.latitude);
  const [longitude, setLongitude] = useState(data.longitude);

  const onSubmit = (city) => {
    sendRequest(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=78839745a89023129881747e0b14fefd`
    );
  };

  if (error) {
    return <h1 className="message">Error: {error.message}</h1>;
  } else if (!loading) {
    return <h1 className="message">Loading...</h1>;
  } else {
    return (
      <div className="App">
        <InputCity city={data.city} onSubmit={onSubmit} />
        <ForecastList lat={latitude} lon={longitude} />
      </div>
    );
  }
}

export default App;
