let AttackingMidfielderCenter = require("../models/attacking_midfielder_center.model");

exports.getAttackingMidfielderCenters = (req, res) => {
  AttackingMidfielderCenter.find()
    .then((attacking_midfielder_center) => res.json(attacking_midfielder_center))
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
    positioning,
    aerial_ablility,
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
    positioning,
    pace,
    stamina,
    strength,
    technique,
    through_balls,
    passing,
    aerial_ablility,
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
