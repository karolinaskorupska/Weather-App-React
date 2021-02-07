import React from "react";
import "./Loader.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loader = (props) => {
  return (
    <div className="Loader">
      <FontAwesomeIcon
        icon="fan"
        className="Icon"
        style={{ color: "#a2cdcd" }}
        size="6x"
        spin
      />
      <span className="text-container-mt-3">{props.msg}</span>
    </div>
  );
};

export default Loader;
