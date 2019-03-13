import React, { Component } from "react";
import { Input, TextArea, FormBtn, SelectControl } from "../Form";
import { Link } from "react-router-dom";
import API from "../../utils/API";

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

  handleCreateAssignment = () => {
    API.saveAssignment({
      assignmentName: this.state.assignmentName,
      type: this.state.type,
      completed: this.state.completed,
      dueDate: this.state.dueDate,
      isRequired: this.state.isRequired,
      assignmentDetails: this.assignmentDetails,
      assignmentLink: this.state.assignmentLink
    }).catch(err => console.log(err));
  };

  render() {
    return (
      <form>
        <Input
          name="assignmentName"
          placeholder="Assignment Name"
          onChange={this.handleInputChange}
        />
        <SelectControl name="type" onChange={this.handleInputChange}>
          <option defaultValue>Academic or Career?</option>
          <option value="Academic">Academic</option>
          <option value="Career">Career</option>
        </SelectControl>
        <Input
          name="dueDate"
          placeholder="Due Date"
          onChange={this.handleInputChange}
        />
        <SelectControl name="isRequired" onChange={this.handleInputChange}>
          <option defaultValue>Optional or Required?</option>
          <option value="false">Optional</option>
          <option value="true">Required</option>
        </SelectControl>
        <Input
          name="assignmentLink"
          placeholder="Link to the assignment"
          onChange={this.handleInputChange}
        />
        <TextArea
          name="assignmentDetails"
          placeholder="Details about the assignment"
          onChange={this.handleInputChange}
        />
        <FormBtn onClick={() => this.handleCreateAssignment()}>
          Create Assignment
        </FormBtn>
        <Link to="/home" role="button" className="btn btn-danger mb-4">
          Cancel
        </Link>
      </form>
    );
  }
}

export default addAssignment;
