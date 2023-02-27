import { Component } from "react";

class AddForm extends Component {
  render() {
    var user = {name:'',username:''}
    const {addUser} = this.props;
    return (
      <div className="divAddForm">
        <h1>Add User</h1>
        <form>
          <label for="name">Name: </label>
          <input type="text" id="name" name="name" onSubmit={(e) => user.name = e.target.value}></input>
          <label for="username">username: </label>
          <input type="text" id="username" name="username" onSubmit={(e) => user.username = e.target.value}></input>
          <button type="submit" onClick={()=>{addUser(user)}}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddForm;
