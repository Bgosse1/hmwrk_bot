const router = require("express").Router();
const authenticateController = require("../../controllers/authenticateController");
const passport = require("passport");
// Matches with "/api/authenticate"

// router.route("/").get(passport.authenticate("github"));
// router.get('/', passport.authenticate('github'));
router.get("/", passport.authenticate("github"));

router.get('/user', (req, res, next) => {
  console.log('===== user!!======')
  console.log("req alksj,hd", req);
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})


//Matches with "/api/authenticate/return"
router
  .route("/return")
  .get(passport.authenticate("github", 
  { 
    failureRedirect: "http://localhost:3000/login",
    successRedirect: "http://localhost:3000/"
  }))

module.exports = router;
