import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  const Panelstyles = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  const groupStyle = {
    display: 'flex',
    width: '100%',
    height: 100,
  };

  return (
    <div style={Panelstyles}>
      <div style={groupStyle} className="Group-1">
        <Button color="#E0E0E0" name="AC" />
        <Button color="#E0E0E0" name="+/-" />
        <Button color="#E0E0E0" name="%" />
        <Button name="÷" />
      </div>
      <div style={groupStyle} className="Group-2">
        <Button color="#E0E0E0" name="7" />
        <Button color="#E0E0E0" name="8" />
        <Button color="#E0E0E0" name="9" />
        <Button name="x" />
      </div>
      <div style={groupStyle} className="Group-3">
        <Button color="#E0E0E0" name="4" />
        <Button color="#E0E0E0" name="5" />
        <Button color="#E0E0E0" name="6" />
        <Button name="-" />
      </div>
      <div style={groupStyle} className="Group-4">
        <Button color="#E0E0E0" name="1" />
        <Button color="#E0E0E0" name="2" />
        <Button color="#E0E0E0" name="3" />
        <Button name="+" />
      </div>
      <div style={groupStyle} className="Group-5">
        <Button color="#E0E0E0" wide name="0" />
        <Button color="#E0E0E0" name="." />
        <Button name="=" />
      </div>
    </div>
  );
}
