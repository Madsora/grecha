import React from "react";
import styles from "./styles.module.scss";
import { Navbar } from "react-bootstrap";

const Header = () => (
  <Navbar className={styles.navigation}>
    <Navbar.Brand className="p-0">
        ДЕРЖАВНИЙ СПАДКОВИЙ РЕЄСТР 
    </Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">

    </Navbar.Collapse>
  </Navbar>
);

export default Header;
