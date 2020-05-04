import React from "react";

import Item from "./Item";

const GroceryList = props => {
  //const sortedList = props.groceries.sort((a, b) => a.purchased -b.purchased);

  return (
    <div className="shopping-List">
      {props.groceries.map(item => (
        <Item key={item.id} item={item} />
      ))}
      <button className="clear-btn" onClick={props.clearPurchased}>
        Clear purchased
      </button>
    </div>
  );
};
