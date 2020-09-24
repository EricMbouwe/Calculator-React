import React from 'react';
import Button from './Button';

export default function ButtonPanel({ clickHandler }) {
  const Panelstyles = {
    display: "flex",
    flexWrap: "wrap",
  };

  const groupStyle = {
    display: "flex",
    width: "100%",
    height: 100,
  };

  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };

  return (
    <div style={Panelstyles}>
      <div style={groupStyle} className="Group-1">
        <Button color="#E0E0E0" name="AC" clickHandler={handleClick} />
        <Button color="#E0E0E0" name="+/-" clickHandler={handleClick} />
        <Button color="#E0E0E0" name="%" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div style={groupStyle} className="Group-2">
        <Button color="#E0E0E0" name="7" clickHandler={handleClick} />
        <Button color="#E0E0E0" name="8" clickHandler={handleClick} />
        <Button color="#E0E0E0" name="9" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick} />
      </div>
      <div style={groupStyle} className="Group-3">
        <Button color="#E0E0E0" name="4" clickHandler={handleClick} />
        <Button color="#E0E0E0" name="5" clickHandler={handleClick} />
        <Button color="#E0E0E0" name="6" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div style={groupStyle} className="Group-4">
        <Button color="#E0E0E0" name="1" clickHandler={handleClick} />
        <Button color="#E0E0E0" name="2" clickHandler={handleClick} />
        <Button color="#E0E0E0" name="3" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div style={groupStyle} className="Group-5">
        <Button color="#E0E0E0" wide name="0" clickHandler={handleClick} />
        <Button color="#E0E0E0" name="." clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
}
