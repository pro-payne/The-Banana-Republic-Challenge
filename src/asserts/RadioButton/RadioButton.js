import React from "react";
import "./RadioButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RadioButton = ({ name, value, icon, id, label }) => {
  return (
    <label className="radio-button" htmlFor={value}>
      <input type="radio" id={id} name={name} value={value} />
      <div className="icon-style">
        <FontAwesomeIcon icon={icon} />
      </div>
      <span>{label}</span>
    </label>
  );
};

export default RadioButton;
