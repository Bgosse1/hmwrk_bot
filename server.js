const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("client/build"));

app.use(routes);

// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hmwrk_botDB");

app.listen(PORT, function() {
  // eslint-disable-next-line no-console
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
