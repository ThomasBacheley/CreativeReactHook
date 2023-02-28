import React, { useState } from "react";

const AddForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target; // recuperer les valeurs de l'input

    setUser({ ...user, [name]: value }); // on les balances dans le 'users'
  };

  return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!user.name || !user.username) return;

          props.addUser(user); // et c'est la qu'on add notre user en quelque sorte
          setUser(initialFormState);
        }}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
        <button>Add new user</button>
      </form>
  );
};

export default AddForm;
