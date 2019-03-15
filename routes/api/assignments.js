const router = require("express").Router();
const assignmentController = require("../../controllers/assignmentController");

// Matches with "/api/books"
router.route("/")
  .get(assignmentController.findAll)
  .post(assignmentController.create);

// Matches with "/api/books/:id"
 router
   .route("/:id")
//   .get(bookController.findById)
    .put(assignmentController.update)
    .delete(assignmentController.remove);

module.exports = router;
