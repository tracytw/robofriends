import React from "react";

const ChangeColor = ({ changeColor, name, value }) => {
  return (
    <div className="color">
      <input onChange={changeColor} type="color" name={name} value={value} />
      <p className="changeColor">Change Color</p>
    </div>
  );
};

export default ChangeColor;
