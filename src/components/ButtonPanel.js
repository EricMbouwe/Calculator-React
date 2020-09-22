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
        <Button color="#f39c12" name="AC" />
        <Button color="#f39c12" name="+/-" />
        <Button color="#f39c12" name="%" />
        <Button color="#c0392b" name="÷" />
      </div>
      <div style={groupStyle} className="Group-2">
        <Button color="" name="7" />
        <Button color="" name="8" />
        <Button color="" name="9" />
        <Button color="#c0392b" name="x" />
      </div>
      <div style={groupStyle} className="Group-3">
        <Button color="" name="4" />
        <Button color="" name="5" />
        <Button color="" name="6" />
        <Button color="#c0392b" name="-" />
      </div>
      <div style={groupStyle} className="Group-4">
        <Button color="" name="1" />
        <Button color="" name="2" />
        <Button color="" name="3" />
        <Button color="#c0392b" name="+" />
      </div>
      <div style={groupStyle} className="Group-5">
        <Button color="" wide name="0" />
        <Button color="" name="." />
        <Button color="#c0392b" name="=" />
      </div>
    </div>
  );
}
