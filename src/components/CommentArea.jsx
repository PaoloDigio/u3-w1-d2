import { Component } from "react";
import AddComment from "./AddComment";
// import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = () => {
    fetch("https://striveschool-api-herokuapp.com/api/comments/0307742482" + this.props.asin, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYTRlZjRjNTllYzAwMTk5MGQ3MjMiLCJpYXQiOjE3MTA0MjM3NjIsImV4cCI6MTcxMTYzMzM2Mn0.EMx3nhjPaBJEYXN84kCp85qNkqpf7F0Pxu78VqJAcTI",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nella chiamata API");
        }
      })
      .then((commentsFromAPI) => {
        console.log("Commenti", commentsFromAPI);
        this.setState({
          comments: commentsFromAPI,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
        this.setState({});
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <>
        {this.props.selected === true && <h4>Commenti:</h4>}
        <AddComment asin={this.props.asin} />
      </>
    );
  }
}

export default CommentArea;
