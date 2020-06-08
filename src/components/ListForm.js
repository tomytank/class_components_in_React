import React from "react";
//class component for item added, called from index.js
class ListForm extends React.Component {
  constructor() {
    super(); //!!!!
    //set up some state to allow reading input field
    this.state = {
      itemName: "",
      hasBeenEntered: false
    };
  }
  //we have state here and in index.js
  //this is why this is a Class component and other components
  // are functional components (they don't have state and
  //don't have interactivity)
  handleChanges = event => {
    //update state with each keystroke
    event.preventDefault();
    this.setState({ itemName: event.target.value });
    this.setState({ hasBeenEntered: true });
    //this.props.addItemFunctionThing()
  };
  handleClick = event => {
    event.preventDefault();
    //const itemValue = this.state.itemName;
    const itemValue = this.state.itemName; //collects value from state
    this.props.addItemFunctionThing(itemValue);
    //passes value to function defined in index.js
    //which is (the function is) routed here by reference
    this.setState({ itemName: "" });
    this.setState({ hasBeenEntered: false });
  };
  //class property to submit form

  render() {
    console.log("rendering form from form.js");
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
