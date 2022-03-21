const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    surname: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    AMKA: {
      type: String,
      required: true,
      unique: true,
    },
    weight: {
      duration: { type: Number, required: true },
    },
    birthdate: { type: Date, required: true },
    nationality: { type: String, required: true },
    position: { type: String, required: true },
    preferred_foot: { type: String, required: true },
    team_id: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
