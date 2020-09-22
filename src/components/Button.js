import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name, color, wide }) {
  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    backgroundColor: '#95a5a6',
    fontSize: 20,
    fontWeight: 'bold',
    border: '1px solid #fff',
  };

  if (wide) {
    buttonStyle.width = '50%';
  }
  if (color) {
    buttonStyle.backgroundColor = color;
  }

  return <div style={buttonStyle}>{name}</div>;
}

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  name: '',
  color: "#95a5a6",
  wide: false,
};
