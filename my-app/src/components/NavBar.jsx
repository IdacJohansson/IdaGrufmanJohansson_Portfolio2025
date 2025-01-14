import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container className="container" style={{ maxWidth: "600px" }}>
        <Navbar
          className="costum-icon-color"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="custom-link" href="/">
              Ida
            </Nav.Link>
            <Nav.Link className="custom-link" href="/Experience">
              Experience
            </Nav.Link>
            <Nav.Link className="custom-link" href="/Contact">
              Contact
            </Nav.Link>
            <Nav.Link
              className="custom-link"
              href="https://github.com/IdacJohansson"
              rel="noopener noreferrer"
            >
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar
