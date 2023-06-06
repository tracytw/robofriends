import React from "react";
import Card from "./card";

const CardList = ({ search, robots }) => {
  return (
    <div className="cards">
      {robots.map((item) => (
        <Card key={item.id} id={item.id} name={item.name} email={item.email} />
      ))}
    </div>
  );
};

export default CardList;
