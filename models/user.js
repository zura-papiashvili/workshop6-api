import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    validate: [(firstName) => firstName.length >= 3, "firstname should have at least 3 characters"],
  },
  lastName: {
    type: String,
    requeired: true,
    validate: [(lastname) => lastname.length >= 3, "lastname should have at least 3 characters"],
  },
  email: { type: String, required: true, validate: [validator.isEmail, "invalid email"] },
  // sex: { type: String, required: true },
  password: {
    type: String,
    required: true,
    validate: [(password) => password.length >= 8, "password should have at least 8 characters"],
  },
  age: {
    type: Number,
    required: true,
    validate: [(age) => age > 18, "age should be more than 18"],
  },

  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },

  isLoggedIn: {
    type: Boolean,
    default: false,
  },
});

export const User = mongoose.model("User", userSchema);
