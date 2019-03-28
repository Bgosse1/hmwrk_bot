import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { List } from "../components/List";
import API from "../utils/API";
import Assignment from "../components/Assignment";
import AddAssignment from "../components/addAssignment";
import { Input, TextArea, SelectControl } from "../components/Form";
import { Modal, Button } from "react-bootstrap";

class Home extends Component {
  state = {
    assignments: [],
    message: "Currently there are no assignments",
    show: false,
    modal: false
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

  handleShowModal = id => {
    const assignment = this.state.assignments.find(
      assignment => assignment._id === id
    );
    this.setState({
      modal: true,
      selectedAssignment: assignment,
      assignmentName: assignment.assignmentName,
      type: assignment.type,
      dueDate: assignment.dueDate,
      isRequired: assignment.isRequired,
      assignmentDetails: assignment.assignmentDetails,
      assignmentLink: assignment.assignmentDetails,
      completed: false,
      id: assignment._id
    });
  };

  handleCloseModal = () => {
    this.setState({ modal: false });
  };

  handleDeleteAssignment = id => {
    API.deleteAssignment(id)
      .then(res => {
        this.handleCloseModal();
        this.getAssignments();
      })
      .catch(err => console.log(err));
  };

  handleUpdateAssignment = event => {
    event.preventDefault();
    API.updateAssignment({
      assignmentName: this.state.assignmentName,
      type: this.state.type,
      dueDate: this.state.dueDate,
      isRequired: this.state.isRequired,
      assignmentDetails: this.state.assignmentDetails,
      assignmentLink: this.state.assignmentDetails,
      completed: false,
      id: this.state.id
    })
      .then(res => {
        this.handleCloseModal();
        this.getAssignments();
      })
      .catch(err => console.log(err));
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
                You can add, update or delete assignments.
              </h2>
              <h3 className="text-center">The Bot might be
                Sleeping, Click to wake it up.
              <a 
                href="https://hmwrkbot.herokuapp.com/"
                className="btn btn-primary btn-lg active ml-3"
                role="button"
                target="_blank"
              >
                Wake Up
              </a>
              </h3>
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
                    assignmentName={assignment.assignmentName}
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
        <Modal show={this.state.modal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.assignmentName}</Modal.Title>
          </Modal.Header>
          <form>
            <Input
              value={this.state.assignmentName}
              name="assignmentName"
              placeholder="Assignment Name"
              onChange={this.handleInputChange}
            />
            <SelectControl
              value={this.state.type}
              name="type"
              onChange={this.handleInputChange}
            >
              <option defaultValue>Academic or Career?</option>
              <option value="Academic">Academic</option>
              <option value="Career">Career</option>
            </SelectControl>
            <Input
              value={this.state.dueDate}
              name="dueDate"
              placeholder="Due Date"
              onChange={this.handleInputChange}
            />
            <SelectControl
              value={this.state.isRequired}
              name="isRequired"
              onChange={this.handleInputChange}
            >
              <option defaultValue>Optional or Required?</option>
              <option value="false">Optional</option>
              <option value="true">Required</option>
            </SelectControl>
            <Input
              value={this.state.assignmentLink}
              name="assignmentLink"
              placeholder="Link to the assignment"
              onChange={this.handleInputChange}
            />
            <TextArea
              value={this.state.assignmentDetails}
              name="assignmentDetails"
              placeholder="Details about the assignment"
              onChange={this.handleInputChange}
            />
          </form>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.handleDeleteAssignment(this.state.id)}
            >
              Delete
            </Button>
            <Button variant="primary" onClick={this.handleUpdateAssignment}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default Home;
