let Team = require("../models/team.model");

exports.getTeams = (req, res) => {
  Team.find()
    .then((teams) => res.json(teams))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificTeam = (req, res) => {
  const id = req.params.id;
  Team.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Team with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Team with id=" + id });
    });
};

exports.getTeamByCoach = (req, res) => {
  const id = req.params.id;
  Team.find({coach_id:id})
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Team with coach id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Team with coach id=" + id });
    });
};

exports.addTeam = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const {
    name,
    coach_id,
    number_of_players
  } = req.body;

  const newTeam = new Team({
    name,
    coach_id,
    number_of_players
  });

  newTeam
    .save()
    .then(() => res.json("Team added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateTeam= (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  Team.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find Team with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.deleteTeam = (req, res) => {
  const id = req.params.id;
  Team.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Team with id=${id}.`,
        });
      } else {
        res.send({
          message: "Team was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Team with id=" + id,
      });
    });
};
