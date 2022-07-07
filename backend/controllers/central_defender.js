let CentralDefender = require("../models/central_defender.model");

exports.getCentralDefenders = (req, res) => {
  CentralDefender.find()
    .then((central_defender) => res.json(central_defender))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificPlayer = (req, res) => {
  const id = req.params.id;
  CentralDefender.find({player_id:id})
    .then((central_defender) => res.json(central_defender))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificPlayerRating = (req, res) => {
  const id = req.params.id;
  CentralDefender.find({ player_id: id })
    .then((central_defender) => {
      const player = central_defender[0];

      let sum =
        (0.05 * ~~player.personality +
        0.05 * ~~player.experience +
        0.05 * ~~player.agility +
        0.05 * ~~player.team_work +
        0.05 * ~~player.leadership +
        0.05 * ~~player.aerial_ability +
        0.05 * ~~player.tactics +
        0.05 * ~~player.communication +
        0.1 * ~~player.positioning +
        0.05 * ~~player.pace +
        0.1 * ~~player.stamina +
        0.1 * ~~player.marking +
        0.05 * ~~player.passing +
        0.05 * ~~player.strength +
        0.1 * ~~player.tackling +
        0.05 * ~~player.technique)/16;

      res.json(sum);
    })
    .catch((err) => res.status(400).json("Error: " + err));
};


exports.getSpecificCentralDefender = (req, res) => {
  const id = req.params.id;
  CentralDefender.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found CentralDefender with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving CentralDefender with id=" + id });
    });
};

exports.addCentralDefender = (req, res) => {
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
    aerial_ability,
    tackling
  } = req.body;

  const newCentralDefender = new CentralDefender({
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
    aerial_ability,
    tackling
  });

  newCentralDefender
    .save()
    .then(() => res.json("CentralDefender added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateCentralDefender = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  CentralDefender.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find CentralDefender with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.deleteCentralDefender = (req, res) => {
  const id = req.params.id;
  CentralDefender.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete CentralDefender with id=${id}.`,
        });
      } else {
        res.send({
          message: "CentralDefender was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete CentralDefender with id=" + id,
      });
    });
};
