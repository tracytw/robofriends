import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot img" />
      <div className="roboInfo">
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
