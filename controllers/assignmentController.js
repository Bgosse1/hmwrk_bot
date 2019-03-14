const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Assignment.find(req.query)
      .then(dbAssignment => res.json(dbAssignment))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Assignment.findById(req.params.id)
      .then(dbAssignment => res.json(dbAssignment))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Assignment.create(req.body)
      .then(dbAssignment => res.json(dbAssignment))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Assignment.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbAssignment => res.json(dbAssignment))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Assignment.findById(req.params.id)
      .then(dbAssignment => dbAssignment.remove())
      .then(dbAssignment => res.json(dbAssignment))
      .catch(err => res.status(422).json(err));
  }
};
