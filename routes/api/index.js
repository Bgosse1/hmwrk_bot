const path = require("path");
const router = require("express").Router();
const assignmentsRoutes = require("./assignments");
const authenticateRoutes = require("./authenticate");
const slackRoutes = require("./slack");
const signVerification = require("../../config/middleware/signVerification");

router.use("/assignments", assignmentsRoutes);
router.use("/authenticate", authenticateRoutes);
router.use("/slack", signVerification, slackRoutes);



router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
