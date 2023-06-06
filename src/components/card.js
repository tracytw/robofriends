import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot img" />
      <div className="robotInfo">
        <p className="infoDetail">{name}</p>
        <p className="infoDetail">{email}</p>
      </div>
    </div>
  );
};

export default Card;
