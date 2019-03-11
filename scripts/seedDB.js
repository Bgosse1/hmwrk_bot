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
  },
  {
    assignmentName: "Milestone 6: Prepare for a Successful Interview",
    type: "Career",
    completed: false,
    dueDate: "2019-02-13 23:59:00",
    isRequired: false,
    assignmentDetails: "build a basic webpage!",
    assignmentLink:
      "https://columbia.bootcampcontent.com/columbia-bootcamp/COLNYC201809FSF2/blob/master/01_homework/week_15/homework_instructions.md"
  },
  {
    assignmentName: "Updated Portfolio Page #2",
    type: "Academic",
    completed: false,
    dueDate: "2019-02-16 23:59:00",
    isRequired: true,
    assignmentDetails: "build a basic webpage!",
    assignmentLink:
      "https://columbia.bootcampcontent.com/columbia-bootcamp/COLNYC201809FSF2/blob/master/01_homework/week_15/homework_instructions.md"
  },
  {
    assignmentName: "Milestone 7: Employer Ready",
    type: "Career",
    completed: false,
    dueDate: "2019-02-20 23:59:00",
    isRequired: false,
    assignmentDetails: "build a basic webpage!",
    assignmentLink:
      "https://columbia.bootcampcontent.com/columbia-bootcamp/COLNYC201809FSF2/blob/master/01_homework/week_15/homework_instructions.md"
  },
  {
    assignmentName: "14: All the News That's Fit to Scrape",
    type: "Academic",
    completed: false,
    dueDate: "2019-02-25 23:59:00",
    isRequired: true,
    assignmentDetails: "build a basic webpage!",
    assignmentLink:
      "https://columbia.bootcampcontent.com/columbia-bootcamp/COLNYC201809FSF2/blob/master/01_homework/week_15/homework_instructions.md"
  },
  {
    assignmentName: "15: Clicky Game",
    type: "Academic",
    completed: false,
    dueDate: "2019-03-02 23:59:00",
    isRequired: true,
    assignmentDetails: "build a basic webpage!",
    assignmentLink:
      "https://columbia.bootcampcontent.com/columbia-bootcamp/COLNYC201809FSF2/blob/master/01_homework/week_15/homework_instructions.md"
  },
  {
    assignmentName: "16: NYT React Search",
    type: "Academic",
    completed: false,
    dueDate: "2019-03-09 23:59:00",
    isRequired: true,
    assignmentDetails: "build a basic webpage!",
    assignmentLink:
      "https://columbia.bootcampcontent.com/columbia-bootcamp/COLNYC201809FSF2/blob/master/01_homework/week_15/homework_instructions.md"
  },
  {
    assignmentName: "17: Regionalized HW",
    type: "Academic",
    completed: false,
    dueDate: "2019-03-16 23:59:00",
    isRequired: false,
    assignmentDetails: "build a basic webpage!",
    assignmentLink:
      "https://columbia.bootcampcontent.com/columbia-bootcamp/COLNYC201809FSF2/blob/master/01_homework/week_15/homework_instructions.md"
  },
  {
    assignmentName: "Project 3",
    type: "Academic",
    completed: false,
    dueDate: "2019-03-30 23:59:00",
    isRequired: true,
    assignmentDetails: "build a basic webpage!",
    assignmentLink:
      "https://columbia.bootcampcontent.com/columbia-bootcamp/COLNYC201809FSF2/blob/master/01_homework/week_15/homework_instructions.md"
  },
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
