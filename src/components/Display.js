import React from "react";
import PropTypes from "prop-types";

export default function Display(props) {
  return <div>{props.result}</div>;
}

Display.defaultProps = {
  result: 0,
};

Display.propTypes = {
  result: PropTypes.string.isRequired,
};
