import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BookList = function (props) {
  return (
    <Container className="py-5">
      <Row className="g-3">
        {props.arrayOfBooks.map((book) => {
          return (
            <Col xs={6} md={4} lg={3} key={book.asin}>
              <SingleBook book={book} />
            </Col>
          );
        })}
        ;
      </Row>
    </Container>
  );
};

export default BookList;
