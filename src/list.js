import React from "react";

const list = ({ title, image, style }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt="food" />
    </div>
  );
};

export default list;
