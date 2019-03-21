const db = require("../models");
var passport = require("passport");

module.exports = {
  return: function() {
    passport.authenticate("github", {
      failureRedirect: "http://localhost:3000/"
    }),
    function(req, res) {
      res.redirect("/");
    };
  }
};
