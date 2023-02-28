import "./App.css";
import { useState } from "react";
import AddForm from "./components/AddForm";
import UserTable from "./components/tables/UserTable";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Thomas", username: "Yweelon" },
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const addUser = (user) => {
    user.id = users.length + 1; // utile pour l'edit et le delete + s'incremente auto donc dans une liste on peut
    //lui foutre une key = user.id
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <h1>CRUD App with Hooks</h1>
      <div className="mainDiv">
        <div className="divAddForm">
          <h1>Add User</h1>
          <AddForm addUser={addUser}></AddForm> {/* on peut passer des methodes au props */}
        </div>

        <div className="divViewUser">
          <h1>View Users</h1>
          <UserTable deleteUser={deleteUser} users={users}></UserTable>
        </div>
      </div>
    </div>
  );
};

export default App;
