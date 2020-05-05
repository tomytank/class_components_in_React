import React from "react";
//class component for item added, called from index.js
class ListForm extends React.Component {
  constructor() {
    super(); //!!!!
    //set up some state to allow reading input field
    this.state = {
      itemName: ""
    };
  }
  //we have state here and in index.js
  //this is why this is a Class component and other components
  // are functional components (they don't have state and
  //don't have interactivity)
  handleChanges = e => {
    //update state with each keystroke
    e.preventDefault();
    this.setState({ itemName: e.target.value });
    //this.props.addItemFunctionThing()
  };
  handleClick = event => {
    event.preventDefault();
    //const itemValue = this.state.itemName;
    const itemValue = this.handleChanges;
    this.props.addItemFunctionThing(itemValue);
  };
  //class property to submit form

  render() {
    console.log("rendering form");
    return (
      <form>
        <input
          type="text"
          name="item"
          value={this.state.itemName}
          onChange={this.handleChanges}
        />
        <button onClick={this.handleClick}>Add</button>
      </form>
    );
  }
}
export default ListForm;
