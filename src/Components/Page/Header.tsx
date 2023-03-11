import { 
  Container, 
  // Nav, 
  Navbar, 
  // NavDropdown 
} from "react-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <span className="d-block my-0 py-0 fs-4">JMSv2</span>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="me-6">
          <Nav className="me-auto">
            <NavDropdown title="Components">
              <NavDropdown.Item href="/query-builder">
                Query Builder
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default Header;
