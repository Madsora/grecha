import React from "react";
import styles from "./styles.module.scss";
import { Nav, Navbar, Button } from "react-bootstrap";

const Header = () => (
  <Navbar className="bg-dark justify-content-between"  variant="dark">
    <Navbar.Brand className="p-0">ДЕРЖАВНИЙ СПАДКОВИЙ РЕЄСТР</Navbar.Brand>
    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
      <Nav>
        <Button className="mr-2" variant="primary">Додати відомість</Button>
        <Button variant="primary">Вийти</Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
