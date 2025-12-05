import { Col, Container, Row } from "react-bootstrap";

const NoveltySec = () => {
  return (
    <>
      <Container fluid className="my-3 text-white">
        <h1>Novità</h1>
        <hr />
        <Row xs={2} className="flex-nowrap overflow-x-auto">
          <Col>
            <p>NUOVA STAZIONE RADIO</p>
            <p>Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</p>
            <img
              src="/images/1a.png"
              alt="Immagine Playlist1"
              className="w-100 rounded-3"
            />
          </Col>
          <Col>
            <p>NUOVA STAZIONE RADIO</p>
            <p>Ecco la nuoca casa della musica latina</p>
            <img
              src="/images/1b.png"
              alt="Immagine Playlist2"
              className="w-100 rounded-3"
            />
          </Col>
          <Col>
            <p>NUOVA STAZIONE RADIO</p>
            <p>Ecco la nuoca casa della musica latina</p>
            <img
              src="/images/1c.png"
              alt="Immagine Playlist2"
              className="w-100 rounded-3"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NoveltySec;
