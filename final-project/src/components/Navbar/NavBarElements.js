import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

import styled from "styled-components"
import React, {useContext} from "react"
import {LoginContext} from "../../Contexts/LoginContext" 

const navbar = { backgroundColor: "#563d7c" }
const activeStyle = {
  fontWeight: "bold",
  color: "white",
}

const dropDown = {
  fontWeight: "bold",
  fontSize: 15,
  color: "white",
  marginLeft: 20
}


const Wrapper = styled.div`
  font-family:  "Gill Sans Extrabold", sans-serif;
`
function NavBarElements() {
  const {usernameDisplay, setUserNameDisplay} = useContext(LoginContext)
  const {isLogin, setLogin} = useContext(LoginContext)
  function handleLogout(e) {
    e.preventDefault();
    setLogin(false);
    setUserNameDisplay("");
    localStorage.removeItem("JWT");
    localStorage.removeItem("user");
  }
  return (
    <Wrapper>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={navbar}
      >
        <Navbar.Brand href="/"style={activeStyle}> CELLABORATE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/create" style={activeStyle} >
              Create
            </Nav.Link>
            {/* <Nav.Link href="/covid" style={activeStyle}>Should I Go?</Nav.Link> */}
          </Nav> 
         
          <Nav>
            <NavDropdown title={isLogin? usernameDisplay : "Join With Us" } id="nav-dropdown" style={dropDown}>
              {
                isLogin?
                ( 
                  <NavDropdown.Item href="" onClick={handleLogout}>
                    Sign Out
                  </NavDropdown.Item>
                ): 
                (
                  <>
                    <NavDropdown.Item href="/signup">
                      Sign Up
                    </NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item href="/login">
                      Login
                    </NavDropdown.Item>
                  </>
                )
              }

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    </Wrapper>
  )
}

export default NavBarElements
