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
  };

  wide ? (buttonStyle.width = '50%') : (buttonStyle.width = '25%');

  buttonStyle.backgroundColor = color;

  const handleClick = buttonName => {
    console.log('clicked');
    console.log(buttonName);
    clickHandler(buttonName);
  };

  return (
    <div style={buttonStyle} onClick={() => handleClick(name)}>
      {name}
    </div>
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
