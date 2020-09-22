import React from "react";
import PropTypes from "prop-types";

export default function Button({ name }) {
  return <div style={name === "0" ? zeroStyle : styles}>{name}</div>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "25%",
  backgroundColor: "purple",
  margin: 4,
  fontSize: 20
};

const zeroStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  backgroundColor: "purple",
  margin: 4,
  fontSize: 20,
};
