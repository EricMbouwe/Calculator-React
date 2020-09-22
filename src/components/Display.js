import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ result }) {
  const styles = {
    display: 'flex',
    color: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    fontWeight: 'bold',
    fontSize: 40,
    padding: 20,
    backgroundColor: '#ccc',
    height: 100,
    border: '1px solid #fff',
  };

  return <div style={styles}>{result}</div>;
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};
