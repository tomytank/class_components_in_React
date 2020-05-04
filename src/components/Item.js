import React from "react";

const Item = props => {
  return (
    <div
      onClick={() => {
        console.log("I'm clicked");
      }}
      className={`item${props.item.purchased ? "purchased" : ""}`}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;
