import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
const UserList = () => {
  const { users, deleteUser, toggleLike } = useContext(UserContext);

  return (
    <div>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
          }}
        >
          <img
            src={user.image}
            alt={`${user.name} ${user.surname}`} 
            style={{ width: "50px", height: "50px" }}
          />
          <h2>
            {user.name} {user.surname}
          </h2>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
          <p>Job: {user.job}</p>
          <div className="flex items-center gap-[15px]">
          <image onClick={() => toggleLike(user.id)}>
            {user.liked ? "1" : "0"}
          </image>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
