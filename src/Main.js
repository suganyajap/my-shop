import { Button, Card } from 'react-bootstrap';

export function Main({ image, name, rating, price }) {
  return (
    <Card style={{ width: '18rem' }} className="main-container">
      <Card.Img
        variant="top"
        src={image}
        alt={name} />
      <Card.Body>

        <Card.Title>{name}</Card.Title>
        <Card.Text>{rating}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Button variant="outline-dark">Add Cart</Button>
      </Card.Body>
    </Card>
  );
}
