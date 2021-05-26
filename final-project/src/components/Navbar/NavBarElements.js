import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Navbar from "react-bootstrap/Navbar"
import styled from "styled-components"

const navbar = { backgroundColor: "#00ad5f" }
const activeStyle = {
  //fontWeight: "bold",
}
const Wrapper = styled.div`
  font-family: "Fancy Me";
`
function NavBarElements() {
  return (
    <Wrapper>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={navbar}
        variant="dark"
        bg="dark"
      >
        <Navbar.Brand href="/">CELLABORATE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/create" style={activeStyle}>
              Create
            </Nav.Link>
            <Nav.Link href="/covid">Should I Go?</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="/signout">
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Wrapper>
  )
}

export default NavBarElements
