import React from 'react'
import { Navbar,Nav,NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        
            <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect >
                <Container>
  <Navbar.Brand href="#home" >
    <img src="https://i.ytimg.com/vi/u6uFYAD5-IA/hqdefault.jpg" alt="" width="40"
        height="40"
        className="d-inline-block align-top"/></Navbar.Brand>
  <Navbar.Brand href="#home" >SSIP</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <LinkContainer to="/register">
      <Nav.Link >Register</Nav.Link>
      </LinkContainer>
      <Nav.Link >Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1" className="text-center">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"  className="text-center">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"  className="text-center">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"  className="text-center">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
        </Container>
</Navbar>
        
    )
}

export default Header
