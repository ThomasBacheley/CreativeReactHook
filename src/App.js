import "./App.css";
import { useState } from 'react'
import AddForm from "./components/AddForm";
import ViewUser from "./components/ViewUser";

function App() {
  const [users,setUser] = useState([]);
  return (
    <div className="App">
      <h1>CRUD App with Hooks</h1>
      <div className="mainDiv">
        <AddForm></AddForm>
        <ViewUser></ViewUser>
      </div>
    </div>
  );
}

export default App;
