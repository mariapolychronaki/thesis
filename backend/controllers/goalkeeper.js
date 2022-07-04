let Goalkeeper = require("../models/goalkeeper.model");

exports.getGoalkeepers = (req, res) => {
  Goalkeeper.find()
    .then((goalkeeper) => res.json(goalkeeper))
    .catch((err) => res.status(400).json("Error: " + err));
};


exports.getSpecificPlayer = (req, res) => {
  const id = req.params.id;
  Goalkeeper.find({player_id:id})
    .then((goalkeeper) => res.json(goalkeeper))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificPlayerRating = (req, res) => {
  const id = req.params.id;
  Goalkeeper.find({ player_id: id })
    .then((goalkeeper) => {
      const player = goalkeeper[0];

      let sum =
        (0.05 * ~~player.personality +
        0.05 * ~~player.experience +
        0.05 * ~~player.agility +
        0.05 * ~~player.team_work +
        0.05 * ~~player.leadership +
        0.1 * ~~player.reflexes +
        0.05 * ~~player.communication +
        0.1 * ~~player.shot_stopping +
        0.05 * ~~player.kicking +
        0.05 * ~~player.tactics +
        0.1 * ~~player.penalty_saving +
        0.1 * ~~player.rushing_out +
        0.1 * ~~player.positioning +
        0.1 * ~~player.one_on_ones)/14;

      res.json(sum);
    })
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
    one_on_ones,
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
    one_on_ones,
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
