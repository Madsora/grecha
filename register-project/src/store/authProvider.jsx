import React, { useContext, useState } from "react";

const usersInitialData = [
  {
    id: 0,
    name: "Admin User",
    password: "12345",
    email: "admin@gmail.com",
    role: "admin",
  },
  {
    id: 0,
    name: "Registrator User",
    password: "12345",
    email: "reg@g.com",
    role: "registrator",
  },
];

const AuthContext = React.createContext({
  usersData: usersInitialData,
  currentUser: null,
  setCurrentUser: () => {},
  addUser: () => {},
});

const useAuthContext = () => useContext(AuthContext);

const useProvideAuthContext = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [usersData, setUsersData] = useState(usersInitialData);

  const addUser = (data) => {
    setUsersData([...usersData, { ...data, role: "registrator" }]);
  };

  const removeCurrentUser = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setCurrentUser(user);
  };

  return {
    currentUser,
    usersData,
    setCurrentUser: setUser,
    addUser,
    removeCurrentUser,
  };
};

const AuthContextProvider = ({ children }) => {
  const authData = useProvideAuthContext();

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
