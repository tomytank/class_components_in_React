import React from "react";
import ReactDOM from "react-dom";

import ListForm from "./components/ListForm";
import GroceryList from "./components/GroceryList";
import "./styles.css";

const groceries = [
  {
    name: "Bananas",
    id: 123,
    purchased: false
  },
  {
    name: "Tortillas",
    id: 124,
    purchased: false
  },
  {
    name: "Milk",
    id: 1235,
    purchased: false
  },
  {
    name: "Pizza Sauce",
    id: 1246,
    purchased: false
  },
  {
    name: "Raw Honey",
    id: 1237,
    purchased: false
  },
  {
    name: "Granola",
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = { groceryList: groceries };
  }

  //Class method to update state
  //use arrow funciton to have access to 'this'
  toggleItem = itemId => {
    console.log(itemId);
    this.setState({
      groceryList: this.state.groceryList.map(item => {
        if (itemId === item.id) {
          //change purchased to true, return item
          return {
            ...item,
            purchased: !item.purchased
          };
        }
        //if the item does not match the id clicked
        //just return item unchanged
        return item;
      })
    });
  };
  //const [groceries, toggleItem] = useState(); The functional way for state!!!
  //Want to add single item to array on click of add button.
  //want to
  addItem = item => {
    const rand = 1 + Math.floor(Math.random() * 1e10);
    const objToAdd = {
      name: item,
      id: rand,
      purchased: false
    };

    deleteItem = itemId => {
      console.log(ItemId);
    };

    this.setState({
      groceryList: [...this.state.groceryList, objToAdd]
    });
    //construct a new item (must match shape of data as below)
    //    {
    //  name: "Granola",
    //  id: 1248,
    //  purchased: false
    // }
    /*In App.js add a class property called addItem
    build the logic to update state wiht the item you've typed into the input
    passs the function to ListForm
    in ListForm add a class property that gets called when 
    the form is submitted and calls the addItem you passed down as a prop*/
    //console.log(
    // "Yes, the click Add event is working!! & the input value is: " + item
    //);
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <ListForm
            addItemFunctionThing={this.addItem}
            deleteItem={this.deleteItem}
          />
        </div>
        <GroceryList
          groceries={this.state.groceryList}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
