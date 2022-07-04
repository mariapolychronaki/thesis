let AttackingMidfielderCenter = require("../models/attacking_midfielder_center.model");

exports.getAttackingMidfielderCenters = (req, res) => {
  AttackingMidfielderCenter.find()
    .then((attacking_midfielder_center) => res.json(attacking_midfielder_center))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificPlayer = (req, res) => {
  const id = req.params.id;
  AttackingMidfielderCenter.find({player_id:id})
    .then((attacking_midfielder_center) => res.json(attacking_midfielder_center))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificPlayerRating = (req, res) => {
  const id = req.params.id;
  AttackingMidfielderCenter.find({ player_id: id })
    .then((attacking_midfielder_center) => {
      const player = attacking_midfielder_center[0];

      let sum =
        (0.05 * ~~player.personality +
        0.05 * ~~player.experience +
        0.05 * ~~player.agility +
        0.05 * ~~player.team_work +
        0.05 * ~~player.leadership +
        0.1 * ~~player.dribbling +
        0.1 * ~~player.through_balls +
        0.05 * ~~player.passing +
        0.05 * ~~player.tactics +
        0.05 * ~~player.communication +
        0.05 * ~~player.composure +
        0.05 * ~~player.pace +
        0.05 * ~~player.stamina +
        0.05 * ~~player.shots +
        0.05 * ~~player.crossing +
        0.05 * ~~player.strength +
        0.05 * ~~player.finishing +
        0.05 * ~~player.technique)/18;

      res.json(sum);
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificAttackingMidfielderCenter = (req, res) => {
  const id = req.params.id;
  AttackingMidfielderCenter.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found AttackingMidfielderCenter with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving AttackingMidfielderCenter with id=" + id });
    });
};

exports.addAttackingMidfielderCenter = (req, res) => {
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
    pace,
    stamina,
    strength,
    technique,
    through_balls,
    passing,
    dribbling,
    shots,
    crossing,
    finishing,
    composure
  } = req.body;

  const newAttackingMidfielderCenter = new AttackingMidfielderCenter({
    player_id,
    personality,
    experience,
    agility,
    team_work,
    leadership,
    tactics,
    communication,
    pace,
    stamina,
    strength,
    technique,
    through_balls,
    passing,
    dribbling,
    shots,
    crossing,
    finishing,
    composure
  });

  newAttackingMidfielderCenter
    .save()
    .then(() => res.json("AttackingMidfielderCenter added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateAttackingMidfielderCenter = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  AttackingMidfielderCenter.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find AttackingMidfielderCenter with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.deleteAttackingMidfielderCenter = (req, res) => {
  const id = req.params.id;
  AttackingMidfielderCenter.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete AttackingMidfielderCenter with id=${id}.`,
        });
      } else {
        res.send({
          message: "AttackingMidfielderCenter was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete AttackingMidfielderCenter with id=" + id,
      });
    });
};
