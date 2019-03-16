require("dotenv").config();
const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));

app.use(passport.initialize());
app.use(passport.session());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(routes);
require("./passport/passport")();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hmwrk_botDB", {
  useCreateIndex: true,
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
