import React, { Component } from "react";
import API from "../../utils/API";
import { Input, TextArea, FormBtn, SelectControl } from "../Form";

class addAssignment extends Component {
  state = {
    assignmentName: "",
    type: "",
    dueDate: "",
    isRequired: "",
    assignmentDetails: "",
    assignmentLink: "",
    completed: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleCreateAssignment = event => {
    event.preventDefault();
    API.saveAssignment({
      assignmentName: this.state.assignmentName,
      type: this.state.type,
      completed: this.state.completed,
      dueDate: this.state.dueDate,
      isRequired: this.state.isRequired,
      assignmentDetails: this.state.assignmentDetails,
      assignmentLink: this.state.assignmentLink
    })
      .then(res => {
        this.setState({
          assignmentName: "",
          type: "",
          dueDate: "",
          isRequired: "",
          assignmentDetails: "",
          assignmentLink: ""
        })
        this.props.getAssignments();
      }
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
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
        <FormBtn onClick={this.handleCreateAssignment}>
          Create Assignment
        </FormBtn>
        <button onClick={() => this.props.handleShowForm()} className="btn btn-danger mb-4">
          Cancel
        </button>
      </form>
    );
  }
}

export default addAssignment;
