import React from 'react'
import { Navbar,Nav,NavDropdown, Container } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

function Header() {
  const userLogin = useSelector(state => state.userLogin)
  const {user}=userLogin
  const logout=()=>{
    auth.signOut().then(() => {
      localStorage.removeItem("userLoginInfo")
    }).catch((error) => {
      // An error happened.
    });
    
  }
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
      <Nav.Link >About Us</Nav.Link>
      {user &&
      <NavDropdown title={user.displayName} id="basic-nav-dropdown">
         <LinkContainer to="/profile">
          <NavDropdown.Item className="text-center">   
        Profile
          </NavDropdown.Item>
      </LinkContainer>
        <NavDropdown.Item onClick={()=>logout()} className="text-center">Logout</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item   className="text-center">Separated link</NavDropdown.Item>
      </NavDropdown>
      }
    </Nav>
  </Navbar.Collapse>
        </Container>
</Navbar>
        
    )
}

export default Header
