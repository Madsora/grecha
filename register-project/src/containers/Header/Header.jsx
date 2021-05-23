import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";

import styles from "./styles.module.scss";
import { useAuthContext } from "store/authProvider";
import { useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();
  const { removeCurrentUser, currentUser } = useAuthContext();

  const handleLogOut = () => {
    removeCurrentUser();
    history.push("/sign-in/");
  };

  const handleAddRecord = () => {
    // add link
    history.push("/records/create");
  };

  return (
    <Navbar
      className={`bg-dark justify-content-between ${styles.navigation}`}
      variant="dark"
    >
      <Navbar.Brand className="p-0">ДЕРЖАВНИЙ СПАДКОВИЙ РЕЄСТР</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          {currentUser && currentUser.role !== "admin" && (
            <Button
              onClick={handleAddRecord}
              className="mr-2"
              variant="primary"
            >
              Додати відомість
            </Button>
          )}
          {currentUser && (
            <Button onClick={handleLogOut} variant="primary">
              Вийти
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
