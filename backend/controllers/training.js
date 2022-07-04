let Training = require("../models/training.model");
let Player = require("../models/player.model");

exports.getTrainings = (req, res) => {
  Training.find()
    .then((trainings) => res.json(trainings))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificTraining = (req, res) => {
  const id = req.params.id;
  Training.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Training with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Training with id=" + id });
    });
};

exports.getPlayerTrainings = (req, res) => {
  const { id } = req.params;
  Training.find({ player_id: id })
    .limit(10)
    .sort("-training_date")
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Training with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Training with id=" + id });
    });
};

exports.getTeamTrainings = (req, res) => {
  const { id } = req.params;
  Training.find({ team_id: id })
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Training with id " + id });
      else {
        res.json(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error :" + err });
    });
};

exports.addTraining = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const { name, surname, player_id, training_date, behavior, rating,team_id } =
    req.body;

  const newTraining = new Training({
    name,
    surname,
    player_id,
    team_id,
    training_date,
    behavior,
    rating,
  });

  newTraining
    .save()
    .then(() => res.json("Training added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateTraining = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  Training.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find Training with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.updateUserTraining = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const { user_id, id } = req.params;

  Training.findOneAndUpdate({ user_id: id, id: id }, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find Training with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.deleteTraining = (req, res) => {
  const id = req.params.id;
  Training.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Training with id=${id}.`,
        });
      } else {
        res.send({
          message: "Training was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Training with id=" + id,
      });
    });
};

exports.deleteUserTraining = (req, res) => {
  const { user_id, id } = req.params;
  Training.findOneAndDelete({ user_id: user_id, id: id })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Training with id=${id}.`,
        });
      } else {
        res.send({
          message: "Training was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Training with id=" + id,
      });
    });
};
