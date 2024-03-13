import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card className="h-100">
        <Card.Img variant="top" src={this.props.book.img} alt="img" style={{ height: "60%" }} />
        <Card.Body className="d-flex flex-column justify-content-between" style={{ height: "40%" }}>
          <div className="overflow-auto">
            <Card.Title>{this.props.book.title}</Card.Title>
          </div>
          <div>
            <Card.Text>€ {this.props.book.price.toFixed(2)}</Card.Text>
            <Button variant="primary">Compra ora!</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
