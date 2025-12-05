import { Card, Col } from "react-bootstrap";

const NewOutCard = (props) => {
  return (
    <>
      {props.songs.map((song, i) => (
        <Col key={i} md={4}>
          <Card className="border-0 card-bg">
            <Card.Img
              variant="top"
              src={song.album.cover_medium}
              className="rounded-3"
            />
            <Card.Text className="text-white m-0">{song.title}</Card.Text>
            <Card.Text className="text-white m-0">{song.artist.name}</Card.Text>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default NewOutCard;
