const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trainingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    surname: { type: String, required: true, trim: true, minlength: 3 },
    training_date: { type: Date, required: true },
    player_id: {
      type: String,
      required: true,
    },
    team_id: { type: String, required: true},
    behavior: { type: Number, required: true, min: 0, max: 10 },
    rating: { type: Number, required: true, min: 0, max: 10 },
  },
  {
    timestamps: true,
  }
);

const Training = mongoose.model("Training", trainingSchema);

module.exports = Training;
