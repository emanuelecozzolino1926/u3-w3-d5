import { Col, Container, Row, Card } from "react-bootstrap";

const NewRadio = () => {
  return (
    <>
      <Container fluid className="my-3">
        <h2>Nuovi episodi radio</h2>
        <Row xs={3} lg={5} className="flex-nowrap overflow-x-auto">
          <Col>
            <Card className="border-0">
              <Card.Img variant="top" src="/public/images/2a.png" />
              <Card.Title>Prologo con Abuelo</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Img variant="top" src="/public/images/2b.png" />
              <Card.Title>The Wanderer</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Img variant="top" src="/public/images/2c.png" />
              <Card.Title>Micheal Bublè & Carly Pearce</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Img variant="top" src="/public/images/2d.png" />
              <Card.Title>Stephan Moccio: The Zane Lowe Interview</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Img variant="top" src="/public/images/2e.png" />
              <Card.Title>Chart Spotlight: Julia Michaels</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewRadio;
