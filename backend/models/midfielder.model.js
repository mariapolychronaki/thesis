const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const midfielderSchema = new Schema(
  {
    player_id:{ type: String, required: true,unique: true},
    personality: { type: Number, required: true, min: 0, max:20},
    experience: { type: Number, required: true, min: 0, max:20},
    agility: { type: Number, required: true, min: 0, max:20},
    marking: { type: Number, required: true, min: 0, max:20},
    team_work: { type: Number, required: true, min: 0, max:20},
    leadership: { type: Number, required: true, min: 0, max:20},
    tactics: { type: Number, required: true, min: 0, max:20},
    positioning: { type: Number, required: true, min: 0, max:20},
    communication: { type: Number, required: true, min: 0, max:20},
    passing: { type: Number, required: true, min: 0, max:20},
    shots: { type: Number, required: true, min: 0, max:20},
    stamina: { type: Number, required: true, min: 0, max:20},
    strength: { type: Number, required: true, min: 0, max:20},
    technique: { type: Number, required: true, min: 0, max:20},
    composure: { type: Number, required: true, min: 0, max:20},
    creativity: { type: Number, required: true, min: 0, max:20},
    aerial_ability: { type: Number, required: true, min: 0, max:20},
  },
  {
    timestamps: true,
  }
);

const Midfielder = mongoose.model("Midfielder", midfielderSchema);

module.exports = Midfielder;
