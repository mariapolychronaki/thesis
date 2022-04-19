let Midfielder = require("../models/midfielder.model");

exports.getMidfielders = (req, res) => {
  Midfielder.find()
    .then((midfielder) => res.json(midfielder))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificMidfielder = (req, res) => {
  const id = req.params.id;
  Midfielder.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Midfielder with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Midfielder with id=" + id });
    });
};

exports.addMidfielder = (req, res) => {
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
    marking,
    passing,
    creativity,
    shots,
    composure
  } = req.body;

  const newMidfielder = new Midfielder({
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
    creativity,
    shots,
    composure
  });

  newMidfielder
    .save()
    .then(() => res.json("Midfielder added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateMidfielder = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  Midfielder.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find Midfielder with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.deleteMidfielder = (req, res) => {
  const id = req.params.id;
  Midfielder.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Midfielder with id=${id}.`,
        });
      } else {
        res.send({
          message: "Midfielder was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Midfielder with id=" + id,
      });
    });
};
