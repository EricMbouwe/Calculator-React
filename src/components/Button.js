import React from "react";
import PropTypes from "prop-types";

export default function Button({ name, color, wide }) {
  let buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    backgroundColor: "#ffa502",
    margin: 4,
    fontSize: 20,
    fontWeight: "bold",
    border: "2px solid #000",
  };

  if (wide) {
    buttonStyle.width = "50%";
  }
  if (color) {
    buttonStyle.backgroundColor = color;
  }

  return <div style={buttonStyle}>{name}</div>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
};
