let Player = require("../models/player.model");
const User = require("../models/user.model");
const Team = require("../models/team.model");

exports.getPlayers = (req, res) => {
  Player.find()
    .then((player) => res.json(player))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getPlayersByTeam = (req, res) => {
  const id = req.params.id;
  Player.find({ "team.team_id": id })
    .then((player) => res.json(player))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getPlayersFree = (req, res) => {
  const id = req.params.id;
  Player.find({ team: {} })
    .then((player) => res.json(player))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificPlayer = (req, res) => {
  const id = req.params.id;
  Player.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Player with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Player with id=" + id });
    });
};

exports.addPlayer = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const {
    name,
    surname,
    AMKA,
    weight,
    height,
    birthdate,
    nationality,
    position,
    preferred_foot,
    team,
    email,
  } = req.body;

  console.log(email);

  await User.find({ email: email })
    .then(async (data) => {
      if (data.length == 0) {
        const user_type = "player";
        const state = "not-verified";
        const new_user = new User({
          name,
          surname,
          email,
          user_type,
          state,
        });

        console.log(new_user);

        new_user.save().then((user) => {
          const newPlayer = new Player({
            name,
            surname,
            AMKA,
            weight,
            birthdate,
            nationality,
            position,
            preferred_foot,
            team,
            email,
            height,
          });

          newPlayer.save().then(async (player) => {
            console.log(data);
            await User.findByIdAndUpdate(user._id, {
              player_id: player._id,
            }).then((data) => {
              if (!data) {
                res
                  .status(404)
                  .send({ message: `Cannot update user with ${user._id}` });
                return;
              } else {
                res.json(player);
                return;
              }
            });
          });
        });
      } else if (data.state === "not-verified") {
        res.status(403).send({ message: "Player is not verified" });
      } else {
        console.log(data);
        const newPlayer = new Player({
          name,
          surname,
          AMKA,
          weight,
          birthdate,
          nationality,
          position,
          preferred_foot,
          team,
          email,
          height,
        });

        await newPlayer.save().then(async (player) => {
          console.log(data);
          await User.findByIdAndUpdate(data[0]._id, {
            player_id: player._id,
          }).then((data) => {
            if (!data) {
              res
                .status(404)
                .send({ message: `Cannot update user with ${data[0]._id}` });
              return;
            } else {
              res.json(player);
              return;
            }
          });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

exports.transferPlayer = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;
  const team_id = req.body.teamId;

  console.log(team_id);

  Team.findById(team_id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find team with ${team_id} to update` });
      } else {
        const team = { name: data.name, team_id: team_id };
        Player.findByIdAndUpdate(id, { team: team })
          .then((data1) => {
            if (!data1) {
              res
                .status(404)
                .send({ message: `Cannot find Player with ${id} to update` });
            } else {
              res.json(data1);
            }
          })
          .catch((err) => res.status(500).json("Error: " + err));
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.updatePlayer = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  Player.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find Player with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.deletePlayer = (req, res) => {
  const id = req.params.id;
  Player.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Player with id=${id}.`,
        });
      } else {
        User.findOneAndDelete({ player_id: id }).then((data) => {
          res.send({
            message: "Player was deleted successfully!",
          });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Player with id=" + id,
      });
    });
};
