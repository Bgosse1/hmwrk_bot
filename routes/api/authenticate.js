const router = require("express").Router();
const authenticateController = require("../../controllers/authenticateController");

// Matches with "/api/authenticate"
router
  .route("/")
  .get(authenticateController.authenticate);

//Matches with "/api/authenticate/login/github"
router
  .route("/login/github")
  .get(authenticateController.github);




module.exports = router;
