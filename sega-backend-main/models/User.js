const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    unique: true,
    sparse: true, // permite null pero evita duplicados si existe
  },

  password: {
    type: String,
    required: function () {
      return !this.googleId; 
      // 🔥 Solo es obligatorio si NO es usuario Google
    },
  },

  googleId: {
    type: String,
    unique: true,
    sparse: true, // permite que sea null
  },

  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);