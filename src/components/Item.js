import React from "react";
//functional component
const Item = props => {
  return (
    <div
      onClick={() => {
        props.toggleItem(props.item.id);
      }}
      //=> {
      //console.log("I'm clicked");
      //  }}
      className={`item${props.item.purchased ? " purchased" : ""}`}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;
