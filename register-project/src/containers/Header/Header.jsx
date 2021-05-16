import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { currentUser, removeCurrentUser } from "store/data";
import { useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory()

  const handleLogOut = () => {
    removeCurrentUser();
    history.push("/sign-in/")
  }

  const handleAddRecord = () => {
    // add link
    history.push("/create-record/");
  }

  return (
    <Navbar className="bg-dark justify-content-between" variant="dark">
      <Navbar.Brand className="p-0">ДЕРЖАВНИЙ СПАДКОВИЙ РЕЄСТР</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        {currentUser && (
          <Nav>
            <Button onClick={handleAddRecord} className="mr-2" variant="primary">
              Додати відомість
            </Button>
            <Button onClick={handleLogOut} variant="primary">Вийти</Button>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
