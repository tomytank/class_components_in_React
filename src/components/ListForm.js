import React from "react";
//class component
class ListForm extends React.Component {
  constructor() {
    super(); //!!!!
    this.state = {
      itemName: ""
    };
  }

  handleChanges = e => {
    //update state with each keystroke
    e.preventDefault();
    this.setState({ itemName: e.target.value });
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
        <button>Add</button>
      </form>
    );
  }
}
export default ListForm;
