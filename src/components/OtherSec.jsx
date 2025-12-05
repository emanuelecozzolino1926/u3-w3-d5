import { Col, Container, Row } from "react-bootstrap";

const OtherSec = () => {
  return (
    <>
      <Container fluid className="my-3 text-white">
        <h2>Altro da esplorare</h2>
        <Row xs={1} lg={3}>
          <Col className="my-1">
            <div className="d-flex justify-content-between align-items-center p-3 bg-dark rounded-3">
              <span className="text-danger">Esplora per genere</span>
              <span className="text-danger">&gt;</span>
            </div>
          </Col>
          <Col className="my-1">
            <div className="d-flex justify-content-between align-items-center p-3 bg-dark rounded-3">
              <span className="text-danger">Decenni</span>
              <span className="text-danger">&gt;</span>
            </div>
          </Col>
          <Col className="my-1">
            <div className="d-flex justify-content-between align-items-center p-3 bg-dark rounded-3">
              <span className="text-danger">Attività e stati d'animo</span>
              <span className="text-danger">&gt;</span>
            </div>
          </Col>
          <Col className="my-1">
            <div className="d-flex justify-content-between align-items-center p-3 bg-dark rounded-3">
              <span className="text-danger">Worldwide</span>
              <span className="text-danger">&gt;</span>
            </div>
          </Col>
          <Col className="my-1">
            <div className="d-flex justify-content-between align-items-center p-3 bg-dark rounded-3">
              <span className="text-danger">Classifiche</span>
              <span className="text-danger">&gt;</span>
            </div>
          </Col>
          <Col className="my-1">
            <div className="d-flex justify-content-between align-items-center p-3 bg-dark rounded-3">
              <span className="text-danger">Audio spaziale</span>
              <span className="text-danger">&gt;</span>
            </div>
          </Col>
          <Col className="my-1">
            <div className="d-flex justify-content-between align-items-center p-3 bg-dark rounded-3">
              <span className="text-danger">Video musicali</span>
              <span className="text-danger">&gt;</span>
            </div>
          </Col>
          <Col className="my-1">
            <div className="d-flex justify-content-between align-items-center p-3 bg-dark rounded-3">
              <span className="text-danger">Nuovi artisti</span>
              <span className="text-danger">&gt;</span>
            </div>
          </Col>
          <Col className="my-1">
            <div className="d-flex justify-content-between align-items-center p-3 bg-dark rounded-3">
              <span className="text-danger">Hit del passato</span>
              <span className="text-danger">&gt;</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OtherSec;
