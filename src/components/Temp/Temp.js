import React from "react";
import "./Temp.css";

const Temp = (props) => {
  return (
    <div className="Temp">
      <span className="min">{props.minTemp}</span>
      <span className="max">{props.maxTemp}</span>
    </div>
  );
};

export default Temp;
