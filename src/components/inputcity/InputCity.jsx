import React, { useState } from "react";
import "./style.css";

export const InputCity = (props) => {
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit(city);
      }}
    >
      <input
        type="text"
        placeholder={props.city}
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
      ></input>
    </form>
  );
};
