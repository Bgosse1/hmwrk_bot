const path = require("path");
const router = require("express").Router();
const assignmentsRoutes = require("./assignments");
const authenticateRoutes = require("./authenticate");


router.use("/assignments", assignmentsRoutes);
router.use("/authenticate", authenticateRoutes);



router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
