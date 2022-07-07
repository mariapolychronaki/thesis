const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const enquirySchema = new Schema(
  {
    coach: {
      coach_id: { type: Schema.ObjectId, require: true, unique: false },
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
    },
    player: {
      player_id: { type: Schema.ObjectId, require: true, unique: false },
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
    },
    team: {
      team_id: { type: Schema.ObjectId, require: false, unique: false,parse: true },
      name: {
        type: String,
        required: false,
        trim: true,
        minlength: 3,
        parse:true
      },
    },
    state: {
      type: String,
      enum: ["not-accepted", "accepted","waiting"],
      default: "waiting",
    },
  },
  {
    timestamps: true,
  }
);

const Enquiry = mongoose.model("Enquiry", enquirySchema);

module.exports = Enquiry;
