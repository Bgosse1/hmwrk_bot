const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hmwrk_botDB");

const assignmentSeed = [
  {
    assignmentName: "Project 2",
    type: "Academic",
    completed: false,
    dueDate: "2019-02-04 23:59:00",
    isRequired: true,
    assignmentDetails: "build a basic webpage!",
    assignmentLink:
      "https://columbia.bootcampcontent.com/columbia-bootcamp/COLNYC201809FSF2/blob/master/01_homework/week_15/homework_instructions.md"
  }
];

db.Assignment.remove({})
  .then(() => db.Assignment.collection.insertMany(assignmentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
