import React, { useState } from "react";

export const InputCity = (props) => {
  const [city, setCity] = useState("");

  const onChange = (event) => {
    setCity(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(city);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder={props.city}
        value={city}
        onChange={onChange}
        onSubmit={onSubmit}
      ></input>
    </form>
  );
};
