import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Rocket = ({
  id, name, description, img, type,
}) => (
  <div className="flex m-8">
    <div className="w-72">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${img}`} />
      </Card>
    </div>
    <div className="flex-auto mx-5">
      <Card.Body>
        <Card.Title className="text-l">{name}</Card.Title>
        <Card.Text className="mt-3">{description}</Card.Text>
        <Button className="p-2 mt-3 rounded-md bg-blue-500 text-white">Reserve Rocket</Button>
      </Card.Body>
    </div>
  </div>

);

export default Rocket;
