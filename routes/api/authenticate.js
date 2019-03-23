const router = require("express").Router();
const passport = require("passport");

// Matches with "/api/authenticate"
router.get("/", passport.authenticate("github"));

router.get('/user', (req, res, next) => {
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

//Matches with "/api/authenticate/return"
router.route("/return").get(
  passport.authenticate("github", {
		failureRedirect: process.env.FRONTEND_URL+"login",
    successRedirect: process.env.FRONTEND_URL+"home",
  })
);

module.exports = router;
