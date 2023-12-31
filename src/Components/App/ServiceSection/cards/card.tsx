import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from "../../../../assets/images/presentationImg.jpg";
function CardService() {
  return (
    <Card style={{ width: 'auto'}}>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>Service Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">More Info</Button>
      </Card.Body>
    </Card>
  );
}

export default CardService;