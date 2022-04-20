import { Container, Row, Col, Card, Button } from "react-bootstrap";
import fantasy from "../data/Fantasy.json";

const LatestRelease = () => (
  <Container>
    <Row>
      {fantasy.map((books) => (
        <Col md={3}>
          <Card className="shadow-lg  mb-2 bg-light rounded" key={books.asin}>
            <Card.Img variant="top" src={books.img} />
            <Card.Body>
              <Card.Title>{books.title}</Card.Title>
              <Card.Text>{books.category}</Card.Text>
              <Button variant="primary">Price: {books.price} £</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);
export default LatestRelease;
