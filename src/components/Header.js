import React, { useState, useEffect } from "react";
import ChangeColor from "./ChangeColor";

const Header = () => {
  const [color, setColor] = useState({
    left: "#2107E4",
    right: "#00D8DB",
  });

  const changeColor = (e) => {
    const { name, value } = e.target;
    setColor((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    document.body.style.background = `linear-gradient(90deg, ${color.left}, ${color.right})`;
  }, [color]);

  return (
    <header>
      <ChangeColor changeColor={changeColor} name="left" value={color.left} />
      <h1 className="title">Robofriends</h1>
      <ChangeColor changeColor={changeColor} name="right" value={color.right} />
    </header>
  );
};

export default Header;
