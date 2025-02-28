const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true,},
  age: { type: Number, required: true,  },
  dateOfBirth: { type: Date, required: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  about: { type: String, maxlength: 5000 },
});

module.exports = mongoose.model("User", userSchema);
