import { Col, Container, Row, Card } from "react-bootstrap";

const NewRadio = () => {
  return (
    <>
      <Container fluid className="my-3 text-white">
        <h2 className="mb-3">Nuovi episodi radio &gt;</h2>
        <Row xs={3} lg={5} className="flex-nowrap overflow-x-auto ">
          <Col>
            <Card className="border-0 card-bg">
              <Card.Img
                variant="top"
                src="/images/2a.png"
                className="rounded-3"
              />
              <Card.Title className="text-white song-title">
                Prologo con Abuelo
              </Card.Title>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 card-bg">
              <Card.Img
                variant="top"
                src="/images/2b.png"
                className="rounded-3"
              />
              <Card.Title className="text-white song-title">
                The Wanderer
              </Card.Title>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 card-bg">
              <Card.Img
                variant="top"
                src="/images/2c.png"
                className="rounded-3"
              />
              <Card.Title className="text-white song-title">
                Micheal Bublè & Carly Pearce
              </Card.Title>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 card-bg">
              <Card.Img
                variant="top"
                src="/images/2d.png"
                className="rounded-3"
              />
              <Card.Title className="text-white song-title">
                Stephan Moccio: The Zane Lowe Interview
              </Card.Title>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 card-bg">
              <Card.Img
                variant="top"
                src="/images/2e.png"
                className="rounded-3"
              />
              <Card.Title className="text-white song-title">
                Chart Spotlight: Julia Michaels
              </Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewRadio;
