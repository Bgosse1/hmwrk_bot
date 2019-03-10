const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  assignmentName: { type: String, required: true },
  type: { type: String },
  completed: { type: [String], required: true },
  dueDate: { type: String, required: true },
  isRequired: { type: String, required: true },
  assignmentDetails: { type: String, required: true },
  assignmentLink: { type: String, required: true, unique: true }
});

const Assignment = mongoose.model("Book", assignmentSchema);

module.exports = Assignment;
