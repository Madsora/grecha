import React, { useContext, useState } from "react";

const AuthContext = React.createContext({
  user: null,
  setUser: () => {},
});

const useAuthContext = () => useContext(AuthContext);

const useProvideAuthContext = () => {
  const [user, setUser] = useState(null);

  return {
    user,
    setUser,
  };
};

const AuthContextProvider = ({ children }) => {
  const authData = useProvideAuthContext();

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
