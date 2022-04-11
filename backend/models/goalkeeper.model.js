const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const goalkeeperSchema = new Schema(
  {
    player_id:{ type: String, required: true,unique: true},
    personality: { type: Number, required: true, min: 0, max:20},
    experience: { type: Number, required: true, min: 0, max:20},
    agility: { type: Number, required: true, min: 0, max:20},
    team_work: { type: Number, required: true, min: 0, max:20},
    leadership: { type: Number, required: true, min: 0, max:20},
    reflexes: { type: Number, required: true, min: 0, max:20},
    communication: { type: Number, required: true, min: 0, max:20},
    shot_stopping: { type: Number, required: true, min: 0, max:20},
    kicking: { type: Number, required: true, min: 0, max:20},
    tactics: { type: Number, required: true, min: 0, max:20},
    penalty_saving: { type: Number, required: true, min: 0, max:20},
    ones_on_ones: { type: Number, required: true, min: 0, max:20},
    rushing_out: { type: Number, required: true, min: 0, max:20},
    positioning: { type: Number, required: true, min: 0, max:20},
  },
  {
    timestamps: true,
  }
);

const Goalkeeper = mongoose.model("Goalkeeper", goalkeeperSchema);

module.exports = Goalkeeper;
