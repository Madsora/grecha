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
  const [currentUser, setCurrentUser] = useState(null);
  const [usersData, setUsersData] = useState(usersInitialData);

  const addUser = (data) => {
    data.role = "registrator";
    setUsersData([...usersData, data]);
  };

  const removeCurrentUser = () => {
    setCurrentUser(null);
  };

  return {
    currentUser,
    usersData,
    setCurrentUser,
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
