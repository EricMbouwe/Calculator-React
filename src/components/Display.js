import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ result }) {
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
    textAlign: 'right',
    fontSize: '1.8em',
  };

  return (
    <div style={styles}>
      <div>17781617862</div>
      <div style={resultStyle}>{result}</div>
    </div>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};
