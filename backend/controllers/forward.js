let Forward = require("../models/forward.model");

exports.getForwards = (req, res) => {
  Forward.find()
    .then((forward) => res.json(forward))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificForward = (req, res) => {
  const id = req.params.id;
  Forward.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Forward with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Forward with id=" + id });
    });
};

exports.addForward = (req, res) => {
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
    dribbling,
    pace,
    stamina,
    aerial_ablility,
    strength,
    technique,
    passing,
    composure,
    shots,
    crossing,
    finishing,
    positioning,
  } = req.body;

  const newForward = new Forward({
    player_id,
    personality,
    experience,
    agility,
    team_work,
    leadership,
    tactics,
    communication,
    dribbling,
    pace,
    stamina,
    aerial_ablility,
    strength,
    technique,
    passing,
    composure,
    shots,
    crossing,
    finishing,
    positioning,
  });

  newForward
    .save()
    .then(() => res.json("Forward added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateForward = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  Forward.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find Forward with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.deleteForward = (req, res) => {
  const id = req.params.id;
  Forward.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Forward with id=${id}.`,
        });
      } else {
        res.send({
          message: "Forward was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Forward with id=" + id,
      });
    });
};
