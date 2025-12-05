import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-secondary py-4 w-100">
      <Container fluid className="px-4 small">
        <div className="d-flex flex-wrap gap-2 mb-3">
          <span className="text-white">Italia</span>
          <span className="divider">English (UK)</span>
        </div>
        <p className="mb-3">
          Copyright © 2024 <span className="text-white">Apple Inc.</span> Tutti
          i diritti riservati.
        </p>

        <Row xs={1}>
          <Col>
            <div className="d-flex flex-wrap small">
              <a
                href="#"
                className="text-decoration-none border-end pe-3 ps-0 text-white"
              >
                Condizioni dei servizi internet
              </a>
              <a
                href="#"
                className="text-decoration-none border-end px-3 text-white"
              >
                Apple Music e privacy
              </a>
              <a
                href="#"
                className="text-decoration-none border-end px-3 text-white"
              >
                Avviso sui cookie
              </a>
              <a
                href="#"
                className="text-decoration-none border-end px-3 text-white"
              >
                Supporto
              </a>
              <a href="#" className="text-decoration-none ps-3 text-white">
                Feedback
              </a>
            </div>
          </Col>
        </Row>

        <div className="d-flex flex-column flex-md-row flex-wrap gap-2 gap-md-3"></div>
      </Container>
    </footer>
  );
};

export default Footer;
