import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../../src/styles/Header.css";
export default function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Food Delivery</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="http://localhost:3001/">Нүүр</Nav.Link>
              <Nav.Link href="http://localhost:3001/menu">Хоолны цэс</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="http://localhost:3001/search">
                  Search
                </NavDropdown.Item>
                <NavDropdown.Item href="http://localhost:3001/login">
                  Login
                </NavDropdown.Item>
                <NavDropdown.Item href="http://localhost:3001/order">
                  Order
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
