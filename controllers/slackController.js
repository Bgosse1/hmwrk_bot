const db = require("../models");
let moment = require("moment");
moment.locale();

module.exports = {
  findNext: function(req, res) {
    db.Assignment.find({})
      .sort({ dueDate: -1 })
      .limit(1)
      .then(dbAssignment => {
        var data = {
            // eslint-disable-next-line camelcase
            response_type: "in-channel",
            text:
              "The Next Assignment is " +
              dbAssignment[0].assignmentName +
              " and is due on " +
              moment(dbAssignment[0].dueDate).format("MMMM Do YYYY, h:mm a") +
              " here is the link: " +
              dbAssignment[0].assignmentLink
          };
          res.json(data);
        })
      .catch(err => res.status(422).json(err));
  }
};
