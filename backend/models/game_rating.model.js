const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameRatingSchema = new Schema(
  {
    player_id: { type: String, require: true, parse: true },
    team_id: { type: String, require: true, parse: true },
    date: { type: Date, required: true },
    rating: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const GameRating = mongoose.model("GameRating", gameRatingSchema);

module.exports = GameRating;
