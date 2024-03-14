import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddComment extends Component {
  initialReview = {
    comment: "",
    rate: 1,
    elementId: this.props.asin,
  };
  state = {
    review: this.initialReview,
  };
  render() {
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("https://striveschool-api.herokuapp.com/api/comments/", {
            method: "POST",
            body: JSON.stringify(this.state.review),
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYTRlZjRjNTllYzAwMTk5MGQ3MjMiLCJpYXQiOjE3MTA0MjM3NjIsImV4cCI6MTcxMTYzMzM2Mn0.EMx3nhjPaBJEYXN84kCp85qNkqpf7F0Pxu78VqJAcTI",
              "content-type": "application/json",
            },
          })
            .then((response) => {
              if (response.ok) {
                console.log("Response ok", response);
                window.alert("Commento salvato");
                this.setState({
                  review: this.initialReview,
                });
              } else {
                window.alert("C'è stato un errore, riprova più tardi");
                throw new Error("Errore nel salvataggio del commento");
              }
            })
            .catch((err) => {
              console.log("Errore", err);
            });
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Il tuo commento"
            onChange={(e) => {
              this.setState({ review: { ...this.state.review, comment: e.target.value } });
            }}
            value={this.state.review.comment}
          />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => {
            this.setState({ review: { ...this.state.review, rate: e.target.value } });
          }}
          value={this.state.review.rate}
        >
          <option>Valuta il libro</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComment;
