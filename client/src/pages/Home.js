import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { List } from "../components/List";
import API from "../utils/API";
import Assignment from "../components/Assignment";
import AddAssignment from "../components/addAssignment";
import MyModal from "../components/Modal";

class Home extends Component {
  state = {
    assignments: [],
    message: "Currently there are no assignments",
    show: false,
    modal: false,
    selectedAssignment: {},
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

  handleUpdateAssignment = id => {
    console.log(id);
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

  handleShowForm = () => {
    this.setState({ show: !this.state.show });
  };

  handleShowModal = (id) => {
    const assignment = this.state.assignments.find(assignment => assignment._id === id);
    this.setState({ 
      modal: true, 
      selectedAssignment: assignment,
      assignmentName: assignment.assignmentName,
      type: assignment.type,
      dueDate: assignment.dueDate,
      isRequired: assignment.isRequired,
      assignmentDetails: assignment.assignmentDetails,
      assignmentLink: assignment.assignmentDetails,
      completed: false });
  };

  handleCloseModal = () => {
    this.setState({ modal: false });
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
            {this.state.show ? (
              <AddAssignment
                handleShowForm={this.handleShowForm}
                getAssignments={this.getAssignments}
              />
            ) : (
              <button
                onClick={() => this.handleShowForm()}
                className="btn btn-primary mb-4"
              >
                Add Assignment
              </button>
            )}
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
                    assignmentName={this.assignmentName}
                    assignmentDetails={assignment.assignmentDetails}
                    assignmentLink={assignment.assignmentLink}
                    completed={assignment.completed}
                    dueDate={assignment.dueDate}
                    isRequired={assignment.isRequired}
                    type={assignment.type}
                    Button={() => (
                      <button
                        onClick={() => this.handleShowModal(assignment._id)}
                        className="btn btn-primary ml-2"
                      >
                        Edit
                      </button>
                    )}
                  />
                ))}
              </List>
            ) : (
              <h3>{this.state.message}</h3>
            )}
          </Col>
        </Row>
        {/* {this.state.modal ? (
          <MyModal
            modal={this.state.modal}
            hideModal={this.handleCloseModal}
            handleInputChange = {this.state.handleInputChange}
          />
        ) : (
          <MyModal 
          modal={this.state.modal} 
          hideModal={this.handleCloseModal}
          selectedAssignment={this.state.selectedAssignment}
          handleInputChange = {this.handleInputChange}/>
        )} */}
      </Container>
    );
  }
}

export default Home;
