import React from "react";
import "./Temp.css";

const Temp = (props) => {
  return (
    <div className="Temp">
      <span className="temperature">{props.temperature}</span>
    </div>
  );
};

export default Temp;
