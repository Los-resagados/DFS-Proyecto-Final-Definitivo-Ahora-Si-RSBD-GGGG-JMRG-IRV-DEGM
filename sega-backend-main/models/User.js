const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  provider: {
    type: String,
    enum: ["local", "google", "microsoft"],
    default: "local",
  },
  providerId: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "usuario", "editor"],
    default: "usuario",
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
