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
    failureRedirect: "http://localhost:3000/login",
    successRedirect: "http://localhost:3000/home"
  })
);

module.exports = router;
