import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Rocket = ({
  id, name, description, img, type,
}) => (
  <div className="flex mx-5">
    <div className="w-72">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${img}`} />
      </Card>
    </div>
    <div className="flex-auto mx-5">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </div>
  </div>

);

export default Rocket;
