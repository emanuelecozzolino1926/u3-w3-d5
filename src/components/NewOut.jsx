import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import NewOutCard from "./NewOutCard";

const NewOut = () => {
  const [songs, setSongs] = useState([]);

  const getPupo = () => {
    const apiUrl =
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=pupo";
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          console.log(`Collegato ${response.ok}`);
          return response.json();
        } else {
          throw new Error(
            `Errore nella connessione al server ${response.status}`
          );
        }
      })
      .then((data) => {
        setSongs(data.data.slice(0, 10));
      })
      .catch((error) => {
        console.log(`Impossibile accedere al server ${error}`);
      });
  };

  useEffect(() => {
    getPupo();
  }, []);

  return (
    <>
      <Container fluid>
        <Row xs={3} lg={5}>
          {songs.map((song, i) => {
            let displayClass = "";
            if (i >= 6) {
              displayClass = "d-none d-md-block";
            }
            return (
              <Col key={i} className={displayClass}>
                <NewOutCard song={song} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default NewOut;
