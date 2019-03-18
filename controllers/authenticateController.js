const db = require("../models");
var passport = require("passport");

module.exports = {
  github: function() {
    console.log("in github controller");
    passport.authenticate("github");
  },
  return: function() {
    passport.authenticate("github", {
      failureRedirect: "http://localhost:3000/"
    }),
    function(req, res) {
      res.redirect("/");
    };
  }
};
