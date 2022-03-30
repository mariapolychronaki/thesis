let Player = require("../models/player.model");

exports.getPlayers = (req, res) => {
  Player.find()
    .then((player) => res.json(player))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificPlayer = (req, res) => {
  const id = req.params.id;
  Player.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Player with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Player with id=" + id });
    });
};

exports.addPlayer = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const {
    name,
    surname,
    AMKA,
    weight,
    birthdate,
    nationality,
    position,
    preferred_foot,
    team_id,
  } = req.body;

  const newPlayer = new Player({
    name,
    surname,
    AMKA,
    weight,
    birthdate,
    nationality,
    position,
    preferred_foot,
    team_id,
  });

  newPlayer
    .save()
    .then(() => res.json("Player added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updatePlayer= (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  Player.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find Player with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.deletePlayer = (req, res) => {
  const id = req.params.id;
  Player.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Player with id=${id}.`,
        });
      } else {
        res.send({
          message: "Player was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Player with id=" + id,
      });
    });
};
