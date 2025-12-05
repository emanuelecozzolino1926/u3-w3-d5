import { Card, Col } from "react-bootstrap";

const NewOutCard = (props) => {
  return (
    <>
      <Card className="border-0 card-bg my-3">
        <Card.Img
          variant="top"
          src={props.song.album.cover_medium}
          className="rounded-3"
        />
        <Card.Text className="text-white m-0 song-title">
          {props.song.title}
        </Card.Text>
        <Card.Text className="text-white m-0 song-title">
          {props.song.artist.name}
        </Card.Text>
      </Card>
    </>
  );
};

export default NewOutCard;
