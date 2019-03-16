const db = require("../models");
var passport = require("passport");

module.exports = {
  authenticate: function(req, res) {
      console.log("in authenticate controller");
    // db.Assignment.find(req.query)
    //   .then(dbAssignment => res.json(dbAssignment))
    //   .catch(err => res.status(422).json(err));
  },
  github: function(){
      console.log("in github controller")
    passport.authenticate("github");
  }
};
