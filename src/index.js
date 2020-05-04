import React from "react";
import ReactDOM from "react-dom";
import ListForm from "./components/ListForm";
import GroceryList from "./components/GroceryList";

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
  //Constructor with state
  constructor() {
    super();
    this.state = {
      groceryList: groceries
    };
  }

  //Class method to update state
  //use arrow funciton to have access to 'this'
  toggleItem = itemId() {
    this.setState({

    })
  }
  //const [groceries, toggleItem] = useState(); The functional way!!!

  //<ListForm />
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
        </div>
        <GroceryList groceries={this.state.groceryList} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
