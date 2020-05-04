import React from "react";

import Item from "./Item";
//functional component
const GroceryList = props => {
  //const sortedList = props.groceries.sort((a, b) => a.purchased -b.purchased);

  return (
    <div className="shopping-list">
      {props.groceries.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearPurchased}>
        Clear purchased
      </button>
    </div>
  );
};

export default GroceryList;
