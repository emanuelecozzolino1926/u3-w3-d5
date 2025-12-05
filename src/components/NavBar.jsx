import { Container, Nav, Navbar, Form, InputGroup } from "react-bootstrap";
const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        data-bs-theme="dark"
        className="card-bg d-lg-none"
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav border-0">
            <span
              className="d-flex flex-column justify-content-around "
              style={{ width: "25px", height: "20px" }}
            >
              <span
                style={{
                  backgroundColor: "#FA586A",
                  height: "2px",
                  width: "100%",
                }}
              ></span>
              <span
                style={{
                  backgroundColor: "#FA586A",
                  height: "2px",
                  width: "100%",
                }}
              ></span>
            </span>
          </Navbar.Toggle>
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

      <Nav className="col-md-2 d-none d-md-flex flex-column card-bg mt-3 vh-100 w-100 mt-0 ">
        <div className="ps-3 my-2">
          <Navbar.Brand href="/" className="text-center logo-white ">
            <img src="/logos/music.svg" width="100" height="30" />
          </Navbar.Brand>
        </div>
        <InputGroup className="mb-3 p-3 text-white">
          <InputGroup.Text id="basic-addon1" className="bg-dark border-end-0">
            <i class="bi bi-search text-danger"></i>
          </InputGroup.Text>
          <Form.Control
            placeholder="Ricerca"
            aria-describedby="basic-addon1"
            className="bg-dark text-white border-start-0 p-0"
          />
        </InputGroup>
        <Nav.Link className="text-white nav-Desk" href="/">
          <i className="bi bi-house-door text-danger"> </i>Home
        </Nav.Link>
        <Nav.Link active className="text-white nav-Desk" href="/">
          <i className="bi bi-grid text-danger"> </i>Novità
        </Nav.Link>
        <Nav.Link className="text-white nav-Desk" href="/">
          <i className="bi bi-broadcast text-danger"> </i>Radio
        </Nav.Link>
      </Nav>
    </>
  );
};

export default NavBar;
