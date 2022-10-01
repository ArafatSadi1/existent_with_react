import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <span className="d-flex align-items-center gap-1">
            <img src={logo} alt="" />
            <p className="my-auto fs-3 fw-bold">existent</p>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-3">
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#features">How it works</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav className="gap-3">
            <Nav.Link className="fw-semibold text-dark" href="#deets">
              Login
            </Nav.Link>
            <Button variant="outline-secondary" className="fw-semibold rounded-pill py-0 px-4">
              <Nav.Link
                href="#memes"
                className="text-dark hover-text-white"
              >
                Get Start
              </Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
