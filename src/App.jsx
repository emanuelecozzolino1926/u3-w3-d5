import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import NoveltySec from "./components/NoveltySec";
import NewRadio from "./components/NewRadio.";
import NewOut from "./components/NewOut";
import OtherSec from "./components/OtherSec";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid className="p-0">
        <Row>
          <Col xs={0} md={2}>
            <NavBar />
          </Col>
          <Col xs={12} md={10}>
            <NoveltySec />
            <NewRadio />
            <NewOut />
            <OtherSec />
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
