import React from "react";
import Button from "./Button";

export default function ButtonPanel() {
  return (
    <div style={Panelstyles}>
      <div style={groupStyle} className="Group-1">
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="÷" />
      </div>
      <div style={groupStyle} className="Group-2">
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="x" />
      </div>
      <div style={groupStyle} className="Group-3">
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" />
      </div>
      <div style={groupStyle} className="Group-4">
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+" />
      </div>
      <div style={groupStyle} className="Group-5">
        <Button name="0" />
        <Button name="." />
        <Button name="=" />
      </div>
    </div>
  );
}

const Panelstyles = {
  display: "flex",
  border: "4px solid yellow",
  flexWrap: "wrap"
};

const groupStyle = {
  display: "flex",
  width: "100%",
  height: 100,
  border: "4px solid green"
}