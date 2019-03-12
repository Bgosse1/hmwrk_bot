const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  assignmentName: { type: String, required: true },
  type: { type: String },
  completed: { type: Boolean, required: true },
  dueDate: { type: Date, required: true },
  isRequired: { type: Boolean, required: true },
  assignmentDetails: { type: String, required: true },
  assignmentLink: { type: String, required: true }
});

const Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports = Assignment;
