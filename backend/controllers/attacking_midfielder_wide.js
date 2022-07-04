let AttackingMidfielderWide = require("../models/attacking_midfielder_wide.model");

exports.getAttackingMidfielderWides = (req, res) => {
  AttackingMidfielderWide.find()
    .then((attacking_midfielder_wide) => res.json(attacking_midfielder_wide))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificPlayer = (req, res) => {
  const id = req.params.id;
  AttackingMidfielderWide.find({player_id:id})
    .then((attacking_midfielder_wide) => res.json(attacking_midfielder_wide))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificPlayerRating = (req, res) => {
  const id = req.params.id;
  AttackingMidfielderWide.find({ player_id: id })
    .then((attacking_midfielder_wide) => {
      const player = attacking_midfielder_wide[0];

      let sum =
        (0.05 * ~~player.personality +
        0.05 * ~~player.experience +
        0.05 * ~~player.agility +
        0.05 * ~~player.team_work +
        0.05 * ~~player.leadership +
        0.1 * ~~player.dribbling +
        0.05 * ~~player.tactics +
        0.05 * ~~player.communication +
        0.05 * ~~player.composure +
        0.05 * ~~player.pace +
        0.05 * ~~player.stamina +
        0.05 * ~~player.shots +
        0.05 * ~~player.crossing +
        0.05 * ~~player.strength +
        0.05 * ~~player.finishing +
        0.05 * ~~player.technique)/16;

      res.json(sum);
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificAttackingMidfielderWide = (req, res) => {
  const id = req.params.id;
  AttackingMidfielderWide.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found AttackingMidfielderWide with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving AttackingMidfielderWide with id=" + id });
    });
};

exports.addAttackingMidfielderWide = (req, res) => {
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
    passing,
    pace,
    stamina,
    strength,
    technique,
    dribbling,
    shots,
    crossing,
    finishing,
    composure
  } = req.body;

  const newAttackingMidfielderWide = new AttackingMidfielderWide({
    player_id,
    personality,
    experience,
    agility,
    team_work,
    leadership,
    passing,
    tactics,
    communication,
    pace,
    stamina,
    strength,
    technique,
    dribbling,
    shots,
    crossing,
    finishing,
    composure
  });

  newAttackingMidfielderWide
    .save()
    .then(() => res.json("AttackingMidfielderWide added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateAttackingMidfielderWide = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  AttackingMidfielderWide.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find AttackingMidfielderWide with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.deleteAttackingMidfielderWide = (req, res) => {
  const id = req.params.id;
  AttackingMidfielderWide.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete AttackingMidfielderWide with id=${id}.`,
        });
      } else {
        res.send({
          message: "AttackingMidfielderWide was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete AttackingMidfielderWide with id=" + id,
      });
    });
};
