import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import styles from "./styles.module.scss";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <Navbar
      className={`bg-dark justify-content-between ${styles.navigation}`}
      variant="dark"
    >
      <Navbar.Brand className="p-0">ДЕРЖАВНИЙ СПАДКОВИЙ РЕЄСТР</Navbar.Brand>
      {!pathname.includes("sign-in") && (
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Button className="mr-2" variant="primary">
              Додати відомість
            </Button>
            <Button variant="primary">Вийти</Button>
          </Nav>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
};
export default Header;
