let Enquiry = require("../models/enquiry.model");

exports.getEnquiries = (req, res) => {
  Enquiry.find()
    .then((enquiries) => res.json(enquiries))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getEnquiriesWaiting = (req, res) => {
  Enquiry.find({state: "waiting"})
    .then((enquiries) => res.json(enquiries))
    .catch((err) => res.status(400).json("Error: " + err));
};


exports.getSpecificEnquiry = (req, res) => {
  const id = req.params.id;
  Enquiry.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Enquiry with id " + id });
      else res.json(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Enquiry with id=" + id });
    });
};

exports.addEnquiry = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const { coach, team, player } = req.body;
  const state = "waiting"

  const newEnquiry = new Enquiry({
    coach,
    player,
    team,
    state
  });

  newEnquiry
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateEnquiry = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  Enquiry.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot find Enquiry with ${id} to update` });
      } else {
        res.json(data);
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};


exports.deleteEnquiry = (req, res) => {
  const id = req.params.id;
  Enquiry.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Enquiry with id=${id}.`,
        });
      } else {
        res.send({
          message: "Enquiry was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Enquiry with id=" + id,
      });
    });
};