import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Navbar from "react-bootstrap/Navbar"
import styled from "styled-components"


const navbar = { backgroundColor: "#A57982" }
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
              Login
          </Nav.Link>

          
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    </Wrapper>
  )
}

export default NavBarElements
