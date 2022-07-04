const router = require("express").Router();
var training_controller = require("../controllers/training");

router.get("/", training_controller.getTrainings);

router.get("/user/:id", training_controller.getPlayerTrainings);

router.get("/team/:id", training_controller.getTeamTrainings);

router.post("/", training_controller.addTraining);

router.put("/:id", training_controller.updateTraining);

router.put("/:user_id/:id", training_controller.updateUserTraining);

router.delete("/:id", training_controller.deleteTraining);

router.delete("/:user_id/:id", training_controller.deleteUserTraining);

router.get("/:id", training_controller.getSpecificTraining);

module.exports = router;
