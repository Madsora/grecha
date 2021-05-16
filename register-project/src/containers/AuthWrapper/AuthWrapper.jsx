import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { currentUser } from "store/data";

const AuthWrapper = ({ children }) => {
  const history = useHistory();
  const [isRedirect, setRedirect] = useState(false);

  useEffect(() => {
    setRedirect(!!currentUser);
  }, []);

  if (isRedirect) {
    return history.push("/sign-in");
  }

  return children;
};

export default AuthWrapper;
