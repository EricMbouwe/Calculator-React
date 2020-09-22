import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  return <div>{props.name}</div>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
