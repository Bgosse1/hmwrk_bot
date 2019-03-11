import React, { Component } from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

class Assignment extends Component {
  render() {
    return (
      <ListItem>
        <Row className="flex-wrap-reverse">
          <Col size="md-8">
            <h3 className="font-italic">{this.props.assignmentName}</h3>
            {this.props.assignmentName && (
              <h5 className="font-italic">{this.props.assignmentName}</h5>
            )}
          </Col>
           <Col size="md-4">
            <div className="btn-container">
              <a
                className="btn btn-light"
                target="_blank"
                rel="noopener noreferrer"
                href={this.props.assignmentLink}
              >
                View
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <p className="font-italic small">Written by {this.props.isRequired}</p>
          </Col>
        </Row>
        <Row>
          <Col size="12 sm-4 md-2">

          </Col>
          <Col size="12 sm-8 md-10">
            <p>{this.props.assignmentDetails}</p>
          </Col>
        </Row>
      </ListItem>
    );
  }
}

export default Assignment;
