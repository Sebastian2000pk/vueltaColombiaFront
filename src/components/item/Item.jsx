import React from "react";
import "./item.css";

const Item = ({ children, handleClick }) => {
  return (
    <div className="item" onClick={handleClick}>
      {children}
    </div>
  );
};

export default Item;
