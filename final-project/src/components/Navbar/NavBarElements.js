import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Navbar from "react-bootstrap/Navbar"
import styled from "styled-components"
import React, {useState, useContext} from "react"
import {LoginContext} from "../../Contexts/LoginContext" 

const navbar = { backgroundColor: "#563d7c" }
const activeStyle = {
  fontWeight: "bold",
  color: "white",
}
const activeStyle1 = {
  fontWeight: "bold",
  fontSize: 15,
  color: "white",
  hover: {
    backgroundColor:"black" 
  }
}



const Wrapper = styled.div`
  font-family:  "Gill Sans Extrabold", sans-serif;
`
function NavBarElements() {
  const {usernameDisplay} = useContext(LoginContext)
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
            <Nav.Link href="/covid" style={activeStyle}>Should I Go?</Nav.Link>
          </Nav> 
         
          <Nav className="mr-left">
          <Nav.Link href="/login" style={activeStyle1}>
              {usernameDisplay}
          </Nav.Link>

          
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    </Wrapper>
  )
}

export default NavBarElements
