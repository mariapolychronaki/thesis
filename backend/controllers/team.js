let Player = require("../models/player.model");
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
      if (!data){
        res.status(404).send({ message: "Not found Team with coach id " + id });
      }else{
        console.log(data)
        const team_id = data[0]._id; 
        Player.find({"team.team_id":team_id}).then((players) => {
          console.log(team_id,players)
          Team.findByIdAndUpdate(team_id, {number_of_players:players.length}, { useFindAndModify: true }).then((team)=>{
            console.log(team,team_id)
            if(!team){
              res.status(404).send({ message: "Not found Team with coach id " + id });
            }else{
              res.json(team)
            }
          })
        })
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err});
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

  Team.find({name:name}).then((data) => {
    if(data.length == 0){
      newTeam
    .save()
    .then(() => res.json("Team added!"))
    .catch((err) => res.status(400).json("Error: " + err));
    }else{
      console.log(data)
      res.status(403).send({ message: "Team already exists!" + name });
    }
  }).catch((err) => {
    res.status(500).send({ message: err});
  });

  
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
