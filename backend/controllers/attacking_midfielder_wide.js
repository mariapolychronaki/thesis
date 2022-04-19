let AttackingMidfielderWide = require("../models/attacking_midfielder_wide.model");

exports.getAttackingMidfielderWides = (req, res) => {
  AttackingMidfielderWide.find()
    .then((attacking_midfielder_wide) => res.json(attacking_midfielder_wide))
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
    one_on_ones,
    aerial_ablility,
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
    tactics,
    communication,
    one_on_ones,
    pace,
    stamina,
    strength,
    technique,
    aerial_ablility,
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
