let Goalkeeper = require("../models/goalkeeper.model");

exports.getGoalkeepers = (req, res) => {
  Goalkeeper.find()
    .then((goalkeeper) => res.json(goalkeeper))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificGoalkeeper = (req, res) => {
  const id = req.params.id;
  Goalkeeper.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Goalkeeper with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Goalkeeper with id=" + id });
    });
};

exports.addGoalkeeper = (req, res) => {
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
    reflexes,
    communication,
    shot_stopping,
    kicking,
    tactics,
    penalty_saving,
    ones_on_ones,
    rushing_out,
    positioning
  } = req.body;

  const newGoalkeeper = new Goalkeeper({
    player_id,
    personality,
    experience,
    agility,
    team_work,
    leadership,
    reflexes,
    communication,
    shot_stopping,
    kicking,
    tactics,
    penalty_saving,
    ones_on_ones,
    rushing_out,
    positioning
  });

  newGoalkeeper
    .save()
    .then(() => res.json("Goalkeeper added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateGoalkeeper = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  Goalkeeper.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find Goalkeeper with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.deleteGoalkeeper = (req, res) => {
  const id = req.params.id;
  Goalkeeper.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Goalkeeper with id=${id}.`,
        });
      } else {
        res.send({
          message: "Goalkeeper was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Goalkeeper with id=" + id,
      });
    });
};
