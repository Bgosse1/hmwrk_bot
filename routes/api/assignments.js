const router = require("express").Router();
const assignmentController = require("../../controllers/assignmentController");

// Matches with "/api/books"
router.route("/")
  .get(assignmentController.findAll)
  .post(assignmentController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(bookController.findById)
//   .put(bookController.update)
//   .delete(bookController.remove);

module.exports = router;
