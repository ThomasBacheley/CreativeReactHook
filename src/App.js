import "./App.css";
import { useState } from 'react'
import AddForm from "./components/AddForm";
import ViewUser from "./components/ViewUser";

function App() {

  const [users,setUser] = useState([
    {name:'Thomas',username:'Yweelon'}
  ]);

  const addUser = (user) => {

    setUser([...users,{name:user.name,username:user.username}]);
  }

  return (
    <div className="App">
      <h1>CRUD App with Hooks</h1>
      <div className="mainDiv">
        <AddForm addUser={addUser}></AddForm>
        <ViewUser users={users}></ViewUser>
      </div>
    </div>
  );
}

export default App;
