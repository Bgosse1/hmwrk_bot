const router = require("express").Router();
const assignmentController = require("../../controllers/assignmentController");

// Matches with "/api/assignments"
router
  .route("/")
  .get(assignmentController.findAll)
  .post(assignmentController.create);

// Matches with "/api/assignments/:id"
router
  .route("/:id")
  .put(assignmentController.update)
  .delete(assignmentController.remove);

module.exports = router;
