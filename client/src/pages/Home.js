import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { List } from "../components/List";
import API from "../utils/API";
import Assignment from "../components/Assignment";

class Home extends Component {
  state = {
    assignments: [],
    message: "Currently there are no assignments"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getAssignments = () => {
    API.getAssignments()
      .then(res =>
        this.setState({
          assignments: res.data.items
        })
      )
      .catch(() =>
        this.setState({
          assignments: [],
          message: "There are no assignments"
        })
      );
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Welcome to the Bootcamp Bot Admin App</strong>
              </h1>
              <h2 className="text-center">
                You can add, update or delete assignments
              </h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 sm-12">
            {this.state.assignments.length ? (
              <List>
                {this.state.assignments.map(assignment => (
                    <Assignment />
                //   <Book
                //     key={book.id}
                //     title={book.volumeInfo.title}
                //     subtitle={book.volumeInfo.subtitle}
                //     link={book.volumeInfo.infoLink}
                //     authors={book.volumeInfo.authors.join(", ")}
                //     description={book.volumeInfo.description}
                //     image={book.volumeInfo.imageLinks.thumbnail}
                //     Button={() => (
                //       <button
                //         onClick={() => this.handleSaveBook(book.id)}
                //         className="btn btn-primary ml-2"
                //       >
                //         Save
                //       </button>
                //     )}
                //   />
                ))}
              </List>
            ) : (
              <h3>{this.state.message}</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
