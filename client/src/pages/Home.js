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

  componentDidMount() {
    this.getAssignments();
  }
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
          assignments: res.data
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
            {console.log(this.state.assignments)}
            {this.state.assignments.length ? (
              <List>
                {this.state.assignments.map(assignment => (
                  <Assignment
                    key={assignment._id}
                    assignmentName={assignment.assignmentName}
                    assignmentDetails={assignment.assignmentDetails}
                    assignmentLink={assignment.assignmentLink}
                    completed={assignment.completed}
                    dueDate={assignment.dueDate}
                    isRequired={assignment.isRequired}
                    type={assignment.type}
                  />
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
