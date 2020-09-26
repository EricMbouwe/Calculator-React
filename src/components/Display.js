import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ result, operation, next }) {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    color: '#fff',
    fontSize: '1.5em',
    padding: '10px 15px',
    backgroundColor: '#95a5a6',
    height: 100,
  };

  const resultStyle = {
    flexBasis: '50%',
    textAlign: 'right',
    fontSize: '1.8em',
  };

  return (
    <div style={styles}>
      <div>
        {operation}
        <span> </span>
        {next}
      </div>
      <div style={resultStyle}>{result}</div>
    </div>
  );
}

Display.defaultProps = {
  result: '0',
  operation: null,
  next: '',
};

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};
