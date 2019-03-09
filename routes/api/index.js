const path = require("path");
const router = require("express").Router();
const assignmentsRoutes = require("./assignments");

router.use("/assignments", assignmentsRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
