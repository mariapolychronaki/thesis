let GameRating = require("../models/game_rating.model");

exports.getRatings = (req, res) => {
  GameRating.find()
    .then((game_rating) => res.json(game_rating))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificRating = (req, res) => {
  const id = req.params.id;
  GameRating.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found GameRating with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Player with id=" + id });
    });
};

exports.getSpecificTeamGameRating = (req, res) => {
  const id = req.params.id;
  GameRating.find({team_id: id})
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found GameRating with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Player with id=" + id });
    });
};

exports.addRating = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const { player_id, date, rating, team_id } = req.body;

  const newGameRating = new GameRating({
    player_id,
    date,
    team_id,
    rating,
  });

  newGameRating
    .save()
    .then(() => res.json("Game Rating added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateRating = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  GameRating.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find Game Rating with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.deleteRating = (req, res) => {
  const id = req.params.id;
  GameRating.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Game Rating with id=${id}.`,
        });
      } else {
        res.send({
          message: "Game Rating was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Game Rating with id=" + id,
      });
    });
};

exports.getSpecificPlayerRating = (req, res) => {
  const { player_id } = req.body;

  GameRating.find({ player_id: player_id })
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found GameRating with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Player with id=" + id });
    });
};
