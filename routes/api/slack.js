const router = require("express").Router();
const slackController = require("../../controllers/slackController");

// Matches with "/api/slack"
router
  .route("/")
  .post(slackController.findNext);


module.exports = router;
