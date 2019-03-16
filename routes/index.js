const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require("passport");
const isAdministrator = require("../config/middleware/isAdministrator");

// API Routes
router.route("/").get(
  require("connect-ensure-login").ensureLoggedIn({
    redirectTo: "/login/github",
    setReturnTo: false
  }),
  isAdministrator,
  function(req, res) {
    res.render("admin", {
      user: req.user
    });
  }
);

router.use("/api", apiRoutes);
//Matches /return
router.route("/return").get(
  passport.authenticate("github", {
    failureRedirect: "/login"
  }),
  function(req, res) {
    res.redirect("/");
  }
);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
