const router = require("express").Router();
const authenticateController = require("../../controllers/authenticateController");
const passport = require("passport");
// Matches with "/api/authenticate"
router.route("/").get(passport.authenticate("github"));

//Matches with "/api/authenticate/return"
router
  .route("/return")
  .get(passport.authenticate("github", { failureRedirect: "http://localhost:3001/api/authenticate" }), function(
    req,
    res
  ) {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:3000/");
  });

module.exports = router;
