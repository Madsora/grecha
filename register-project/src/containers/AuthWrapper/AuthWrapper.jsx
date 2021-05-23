import { useHistory } from "react-router";
import { useAuthContext } from "store/authProvider";

const AuthWrapper = ({ children, role, fallback }) => {
  const history = useHistory();
  const { currentUser } = useAuthContext();
  console.log(currentUser);

  if (!currentUser) {
    console.log("no user");
    history.push("/sign-in");
    return null;
  }

  if (currentUser.role !== role) {
    console.log("no role", role);

    history.push(fallback);
    return null;
  }

  return children;
};

export default AuthWrapper;
