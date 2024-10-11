import React from "react";
import { UserProvider } from "./context/UserContext";
import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";

const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>Users</h1>
        <AddUserForm />
        <UserList />
      </div>
    </UserProvider>
  );
};

export default App;
