import React from "react";
import PropTypes from "prop-types";

export default function Button({ name, color, wide }) {
  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    fontSize: 20,
    border: "1px solid lightgray",
  };

  if (wide) {
    buttonStyle.width = "50%";
  }

  buttonStyle.backgroundColor = color;

  return <div style={buttonStyle}>{name}</div>;
}

Button.defaultProps = {
  color: "orange",
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};
