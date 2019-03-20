var GitHubStrategy = require("passport-github").Strategy;
var keys = require("../config/keys");
var passport = require("passport");
var db = require("../models");

module.exports = function() {
  passport.use(
    new GitHubStrategy(
      {
        clientID: keys.github.clientID,
        clientSecret: keys.github.clientSecret,
        callbackURL: keys.githubCallbackUrl.callbackUrl
      },
      function(accessToken, refreshToken, profile, cb) {
        isAdmin(profile);
        console.log("profile",profile);
        return cb(null, profile);
      }
    )
  );
  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });

  passport.deserializeUser(function(obj, cb) {
    obj.isAdmin = isAdmin(obj);
    cb(null, obj);
  });
};
function isAdmin(profile) {
  var adminAccountNames = ["Bgosse1", "harrysuk"];
  var admin = false;
  for (var i = 0; i < adminAccountNames.length; i++) {
    if (profile.username === adminAccountNames[i]) {
      admin = true;
    }
  }
  console.log("profile " + profile.username);
  db.User.findOne({ userName: profile.username }, (err, userMatch) => {
     if (err) {
      console.log("err");
       //return done(null, false);
     }
     if (userMatch) {
       console.log("match", userMatch);
     } else {
      const githubUser = new db.User({
        userName: profile.username,
        isAdmin: admin
      })
      githubUser.save((err, savedUser) => {
        if(err){
          console.log("error saving")
          //return done(null, false);
        }
        else{
          return  savedUser
        }
      })
    }
  });
  return admin;
}

