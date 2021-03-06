const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  isAdmin: { type: Boolean, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
