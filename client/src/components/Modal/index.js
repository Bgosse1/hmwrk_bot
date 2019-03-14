import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import AddAssignment from "../addAssignment";
import { Input, TextArea, FormBtn, SelectControl } from "../Form";
import { throws } from "assert";

class MyModal extends React.Component {

  render() {
    console.log(this.props.selectedAssignment);
    return (
      <>
        <Modal show={this.props.modal} onHide={this.props.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Assignment</Modal.Title>
          </Modal.Header>
          <form>
            <Input
              value={this.props.assignmentName}
              name="assignmentName"
              placeholder="Assignment Name"
              onChange={this.props.handleInputChange()}
            />
            {/* <SelectControl
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
            /> */}
          </form>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={() => this.props.hideModal()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.props.hideModal()}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }
}
//   onClick={() => this.props.handleShowForm()}

export default MyModal;
