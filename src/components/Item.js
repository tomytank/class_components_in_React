import React from "react";
//functional component
const edit = "Edit";
const clear = "Clear";
const Item = props => {
  return (
    <div className={`item${props.item.purchased ? " purchased" : ""}`}>
      <p
        onClick={() => {
          props.toggleItem(props.item.id);
        }}
      >
        {props.item.name}
      </p>
      <span style={{ float: "right", margin: "10px" }}> {clear}&nbsp;</span>
      <span style={{ float: "right", margin: "10px" }}> {edit}&nbsp;</span>
    </div>
  );
};

export default Item;