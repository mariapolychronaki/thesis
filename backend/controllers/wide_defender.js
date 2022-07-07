let WideDefender = require("../models/wide_defender.model");

exports.getWideDefenders = (req, res) => {
  WideDefender.find()
    .then((wide_defender) => res.json(wide_defender))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificPlayer = (req, res) => {
  const id = req.params.id;
  WideDefender.find({player_id:id})
    .then((wide_defender) => res.json(wide_defender))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificPlayerRating = (req, res) => {
  const id = req.params.id;
  WideDefender.find({ player_id: id })
    .then((wide_defender) => {
      const player = wide_defender[0];
      console.log(player)

      let sum =
        (0.05 * ~~player.personality +
        0.05 * ~~player.experience +
        0.05 * ~~player.agility +
        0.05 * ~~player.team_work +
        0.05 * ~~player.leadership +
        0.05 * ~~player.tactics +
        0.05 * ~~player.communication +
        0.15 * ~~player.positioning +
        0.15 * ~~player.pace +
        0.2 * ~~player.stamina +
        0.05 * ~~player.strength +
        0.1 * ~~player.technique)/12;

      res.json(sum);
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificWideDefender = (req, res) => {
  const id = req.params.id;
  WideDefender.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found WideDefender with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving WideDefender with id=" + id });
    });
};

exports.addWideDefender = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const {
    player_id,
    personality,
    experience,
    agility,
    team_work,
    leadership,
    tactics,
    communication,
    positioning,
    pace,
    stamina,
    strength,
    technique,
    marking,
    passing,
    crossing,
    going_forward
  } = req.body;

  const newWideDefender = new WideDefender({
    player_id,
    personality,
    experience,
    agility,
    team_work,
    leadership,
    tactics,
    communication,
    positioning,
    pace,
    stamina,
    strength,
    technique,
    marking,
    passing,
    crossing,
    going_forward
  });

  newWideDefender
    .save()
    .then(() => res.json("WideDefender added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateWideDefender = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  WideDefender.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find WideDefender with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.deleteWideDefender = (req, res) => {
  const id = req.params.id;
  WideDefender.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete WideDefender with id=${id}.`,
        });
      } else {
        res.send({
          message: "WideDefender was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete WideDefender with id=" + id,
      });
    });
};
