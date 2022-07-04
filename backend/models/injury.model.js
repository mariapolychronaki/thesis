const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const injurySchema = new Schema(
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
    player_id: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Injury = mongoose.model("Injury", injurySchema);

module.exports = Injury;
