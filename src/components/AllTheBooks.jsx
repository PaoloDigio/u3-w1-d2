import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import items from "../data/history.json";

const AllTheBooks = function () {
  return (
    <Container className="py-5">
      <Row className="g-3">
        {items.map((book, i) => {
          return (
            <Col xs={6} md={4} lg={3} key={i}>
              <Card className="h-100">
                <Card.Img variant="top" src={book.img} alt="img" style={{ height: "60%" }} />
                <Card.Body className="d-flex flex-column justify-content-between" style={{ height: "40%" }}>
                  <div className="overflow-auto">
                    <Card.Title>{book.title}</Card.Title>
                  </div>
                  <div>
                    <Card.Text>€ {book.price.toFixed(2)}</Card.Text>
                    <Button variant="primary">Compra ora!</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
