import React from "react";
import Button from "./Button";

export default function ButtonPanel() {
  return (
    <div style={Panelstyles}>
      <div style={groupStyle} className="Group-1">
        <Button color={""} name="AC" />
        <Button color={""} name="+/-" />
        <Button color={""} name="%" />
        <Button color={""} name="÷" />
      </div>
      <div style={groupStyle} className="Group-2">
        <Button color={""} name="7" />
        <Button color={""} name="8" />
        <Button color={""} name="9" />
        <Button color={""} name="x" />
      </div>
      <div style={groupStyle} className="Group-3">
        <Button color={""} name="4" />
        <Button color={""} name="5" />
        <Button color={""} name="6" />
        <Button color={""} name="-" />
      </div>
      <div style={groupStyle} className="Group-4">
        <Button color={""} name="1" />
        <Button color={""} name="2" />
        <Button color={""} name="3" />
        <Button color={""} name="+" />
      </div>
      <div style={groupStyle} className="Group-5">
        <Button color={""} wide={true} name="0" />
        <Button color={""} name="." />
        <Button color={""} name="=" />
      </div>
    </div>
  );
}

const Panelstyles = {
  display: "flex",
  border: "4px solid yellow",
  flexWrap: "wrap",
};

const groupStyle = {
  display: "flex",
  width: "100%",
  height: 100,
  border: "4px solid green",
  margin: 2,
};
