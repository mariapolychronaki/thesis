let Injury = require("../models/injury.model");

exports.getInjuries = (req, res) => {
  Injury.find()
    .then((injury) => res.json(injury))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getSpecificInjury = (req, res) => {
  const id = req.params.id;
  Injury.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Injury with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Injury with id=" + id });
    });
};

exports.getSpecificPlayerInjury = (req, res) => {
  const { player_id } = req.params;

  Injury.find({ player_id: player_id })
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Injury with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Player with id=" + id });
    });
};

exports.addInjury = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const { name, surname, player_id } = req.body;

  const newInjury = new Injury({
    name,
    surname,
    player_id,
  });

  newInjury
    .save()
    .then(() => res.json("Injury added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateInjury = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  Injury.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find Injury with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.updateUserInjury = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const { player_id,id} = req.params;

  Injury.findOneAndUpdate({ player_id: player_id,id:id }, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find Injury with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.deleteInjury = (req, res) => {
  const id = req.params.id;
  Injury.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Injury with id=${id}.`,
        });
      } else {
        res.send({
          message: "Injury was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Injury with id=" + id,
      });
    });
};

exports.deleteUserInjury = (req, res) => {

  const { player_id,id} = req.params;

  Injury.findOneAndRemove({ player_id: player_id,id:id }, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find Injury with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};
