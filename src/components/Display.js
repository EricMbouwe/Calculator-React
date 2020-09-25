import React from 'react';
import PropTypes from 'prop-types';
import { inputs } from '../logic/calculate';

export default function Display({ result, next, operation }) {
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

  const renderInputs = inputs.map((input, i) => <span key={i}>{input}</span>);

  return (
    <div style={styles}>
      <div>
        {operation}
        {renderInputs}
      </div>
      <div style={resultStyle}>{result}</div>
    </div>
  );
}

Display.defaultProps = {
  result: '0',
  next: '0',
};

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
};
