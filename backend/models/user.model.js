const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

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
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: "Email address is required",
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    user_type: {
      type: String,
      enum: ["player", "coach", "admin"],
      default: "coach",
    },
    player_id: {
      type: Schema.ObjectId,
      require: false,
      unique: true,
      sparse:true,
    },
    state: {
      type: String,
      enum: ["not-verified", "verified"],
      default: "not-verified",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
