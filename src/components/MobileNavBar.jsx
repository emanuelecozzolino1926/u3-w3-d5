import { Container, Nav, Navbar } from "react-bootstrap";
const MobileNavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        data-bs-theme="dark"
        className="bg-dark d-lg-none"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="#home">
            <img
              src="/logos/music.svg"
              width="80"
              height="30"
              className="d-inline-block align-top logo-white"
              alt="Logo apple Music"
            />
          </Navbar.Brand>
          <Nav.Link href="#accedi" className="text-danger">
            Accedi
          </Nav.Link>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Cerco">Cerca</Nav.Link>
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#nov">Novità</Nav.Link>
              <Nav.Link href="#Radio">Radio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MobileNavBar;
