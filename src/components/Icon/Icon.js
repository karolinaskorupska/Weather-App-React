import React from "react";
import "./Icon.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => {
  switch (props.icon) {
    case 801:
      return (
        <FontAwesomeIcon
          icon="cloud"
          className="Icon"
          style={{ color: "#a2cdcd" }}
          size="6x"
        />
      );
      break;
    case 802:
      return (
        <FontAwesomeIcon
          icon="cloud"
          className="Icon"
          style={{ color: "#a2cdcd" }}
          size="6x"
        />
      );
      break;
    case 803:
      return (
        <FontAwesomeIcon
          icon="cloud"
          className="Icon"
          style={{ color: "#a2cdcd" }}
          size="6x"
        />
      );
      break;
    case 200:
      return (
        <FontAwesomeIcon
          icon="cloud-rain"
          className="Icon"
          style={{ color: "#2c7878" }}
          size="6x"
        />
      );
      break;
    case 201:
      return (
        <FontAwesomeIcon
          icon="cloud-rain"
          className="Icon"
          style={{ color: "#2c7878" }}
          size="6x"
        />
      );
      break;
    case 202:
      return (
        <FontAwesomeIcon
          icon="cloud-rain"
          className="Icon"
          style={{ color: "#2c7878" }}
          size="6x"
        />
      );
      break;
    case 600:
      return (
        <FontAwesomeIcon
          icon="snowflake"
          className="Icon"
          style={{ color: "#c7f3f3" }}
          size="6x"
        />
      );
      break;
    case 601:
      return (
        <FontAwesomeIcon
          icon="snowflake"
          className="Icon"
          style={{ color: "#c7f3f3" }}
          size="6x"
        />
      );
      break;
    case 602:
      return (
        <FontAwesomeIcon
          icon="snowflake"
          className="Icon"
          style={{ color: "#c7f3f3" }}
          size="6x"
        />
      );
      break;
    case 610:
      return (
        <FontAwesomeIcon
          icon="snowflake"
          className="Icon"
          style={{ color: "#c7f3f3" }}
          size="6x"
        />
      );
      break;
    case "Sun":
      return (
        <FontAwesomeIcon
          icon="sun"
          className="Icon"
          style={{ color: "#fbff78" }}
          size="6x"
        />
      );
      break;
    default:
      return (
        <FontAwesomeIcon
          icon="bolt"
          className="Icon"
          style={{ color: "#fbff78" }}
          size="6x"
        />
      );
  }
};

export default Icon;
