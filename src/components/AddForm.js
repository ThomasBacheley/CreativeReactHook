import { Component } from "react";

class AddForm extends Component {
  render() {
    return (
      <div className="divAddForm">
        <h1>Add User</h1>
        <div>
          <label for="name">Name: </label>
          <input type="text" id="name" name="name"></input>
        </div>
        <div>
          <label for="username">username: </label>
          <input type="text" id="username" name="username"></input>
        </div>
        <div>
          <button onClick={alert('suuu')}>Add</button>
        </div>
      </div>
    );
  }
}

export default AddForm;
