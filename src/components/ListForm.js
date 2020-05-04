import React from "react";

class ListForm extends React.Component {
  handleChanges = e => {
    //update state with each keystroke
  };

  //class property to submit form

  render() {
    console.log("rendering form");
    return (
      <form>
        <input type="text" name="item" />
        <button>Add</button>
      </form>
    );
  }
}
export default ListForm;
