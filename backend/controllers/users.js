let User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getUsers = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getCoaches = (req, res) => {
  User.find({ state: "verified", user_type: "coach" })
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getUsersNotVerified = (req, res) => {
  User.find({ state: "not-verified" })
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificUser = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving User with id=" + id });
    });
};

exports.addUser = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const {
    name,
    surname,
    password,
    email,
    username,
    user_type,
    player_id,
    state,
  } = req.body;

  const newUser = new User({
    name,
    surname,
    password,
    email,
    username,
    user_type,
    player_id,
    state,
  });

  // Hash password before saving in database
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
    });
  });
};

exports.updateUser = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find User with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.changePassword = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;
  const password = req.body.password;
  const new_password = req.body.new_password;

  User.findById(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find User with ${id} to update` });
      } else {
        bcrypt.compare(password, data.password).then((isMatch) => {
          if (isMatch) {
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(new_password, salt, (err, hash) => {
                if (err) throw err;
                User.findByIdAndUpdate(id, {password:hash})
                  .then((data) => {
                    if (!data) {
                      res.status(404).send({
                        message: `Cannot find User with ${id} to update`,
                      });
                    } else {
                      res.json(data);
                    }
                  })
                  .catch((err) => res.status(500).json("Error: " + err));
              });
            });
          } else {
            return res
              .status(400)
              .json({ passwordincorrect: "Password incorrect" });
          }
        });
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.verifyUser = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find User with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  User.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}.`,
        });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};

exports.loginUser = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const { password, email } = req.body;

  User.findOne({ email })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot find User with id=${email}.`,
        });
      } else {
        // Check password
        bcrypt.compare(password, data.password).then((isMatch) => {
          if (isMatch) {
            // User matched
            // Create JWT Payload
            const payload = {
              id: data.id,
              name: data.name,
              role: data.user_type,
            };
            // Sign token
            jwt.sign(
              payload,
              process.env.AWS_KEY,
              {
                expiresIn: 31556926, // 1 year in seconds
              },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token,
                });
              }
            );
          } else {
            return res
              .status(400)
              .json({ passwordincorrect: "Password incorrect" });
          }
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not find User with email=" + email,
      });
    });
};
