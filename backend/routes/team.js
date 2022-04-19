const router = require("express").Router();
var team_controller = require("../controllers/team");

router.get("/", team_controller.getTeams);

router.post("/", team_controller.addTeam);

router.put("/:id", team_controller.updateTeam);

router.delete("/:id", team_controller.deleteTeam);

router.get("/:id", team_controller.getSpecificTeam);

module.exports = router;
