let CentralDefender = require("../models/central_defender.model");

exports.getCentralDefenders = (req, res) => {
  CentralDefender.find()
    .then((central_defender) => res.json(central_defender))
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
    aerial_ablility,
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
    aerial_ablility,
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
