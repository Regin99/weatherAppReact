import React from "react";
import "./style.css";

export const Error = (props) => {
  return (
    <div className="error">
      <h1>Error: {props.message}</h1>
    </div>
  );
};
