const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const attackingMidfielderWideSchema = new Schema(
  {
    player_id:{ type: String, required: true,unique: true},
    personality: { type: Number, required: true, min: 0, max:20},
    experience: { type: Number, required: true, min: 0, max:20},
    agility: { type: Number, required: true, min: 0, max:20},
    team_work: { type: Number, required: true, min: 0, max:20},
    leadership: { type: Number, required: true, min: 0, max:20},
    tactics: { type: Number, required: true, min: 0, max:20},
    one_on_ones: { type: Number, required: true, min: 0, max:20},
    communication: { type: Number, required: true, min: 0, max:20},
    dribbling: { type: Number, required: true, min: 0, max:20},
    pace: { type: Number, required: true, min: 0, max:20},
    stamina: { type: Number, required: true, min: 0, max:20},
    aerial_ablility: { type: Number, required: true, min: 0, max:20},
    strength: { type: Number, required: true, min: 0, max:20},
    technique: { type: Number, required: true, min: 0, max:20},
    passing: { type: Number, required: true, min: 0, max:20},
    composure: { type: Number, required: true, min: 0, max:20},
    shots: { type: Number, required: true, min: 0, max:20},
    crossing: { type: Number, required: true, min: 0, max:20},
    finishing: { type: Number, required: true, min: 0,max:20}
  },
  {
    timestamps: true,
  }
);

const AttackingMidfielderWide = mongoose.model("AttackingMidfielderWide", attackingMidfielderWideSchema);

module.exports = AttackingMidfielderWide;
