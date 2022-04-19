const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wideDefenderSchema = new Schema(
  {
    player_id:{ type: String, required: true,unique: true},
    personality: { type: Number, required: true, min: 0, max:20},
    experience: { type: Number, required: true, min: 0, max:20},
    agility: { type: Number, required: true, min: 0, max:20},
    marking: { type: Number, required: true, min: 0, max:20},
    team_work: { type: Number, required: true, min: 0, max:20},
    leadership: { type: Number, required: true, min: 0, max:20},
    pace: { type: Number, required: true, min: 0, max:20},
    communication: { type: Number, required: true, min: 0, max:20},
    passing: { type: Number, required: true, min: 0, max:20},
    tackling: { type: Number, required: true, min: 0, max:20},
    tactics: { type: Number, required: true, min: 0, max:20},
    stamina: { type: Number, required: true, min: 0, max:20},
    strength: { type: Number, required: true, min: 0, max:20},
    technique: { type: Number, required: true, min: 0, max:20},
    positioning: { type: Number, required: true, min: 0, max:20},
    aerial_ablility: { type: Number, required: true, min: 0, max:20},
    crossing: { type: Number, required: true, min: 0, max:20},
    going_forward: { type: Number, required: true, min: 0, max:20},
  },
  {
    timestamps: true,
  }
);

const WideDefender = mongoose.model("WideDefender", wideDefenderSchema);

module.exports = WideDefender;
