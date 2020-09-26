import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  name, color, wide, clickHandler,
}) {
  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    border: '1px solid lightgray',
    cursor: 'pointer',
  };

  buttonStyle.width = wide ? '50%' : '25%';
  buttonStyle.backgroundColor = color;

  const handleClick = buttonName => clickHandler(buttonName);

  return (
    <span
      role="button"
      tabIndex="0"
      style={buttonStyle}
      onClick={() => handleClick(name)}
      onKeyPress={handleClick}
    >
      {name}
    </span>
  );
}

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};
