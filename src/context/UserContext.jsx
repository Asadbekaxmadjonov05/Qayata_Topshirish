import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      image: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg",
      name: "Asadbek",
      surname: "Axmajonv",
      email: "asadbekaxmadjonov@gmail.com",
      age: 19,
      job: "Bekorchi",
      liked: false,
    },
  ]);

  const [likeCount, setLikeCount] = useState(0); 

  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1, liked: false }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const toggleLike = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, liked: !user.liked }
          : user
      )
    );
    const user = users.find((user) => user.id === id);
    if (user.liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <UserContext.Provider value={{ users, likeCount, addUser, deleteUser, toggleLike }}>
      {children}
    </UserContext.Provider>
  );
};
