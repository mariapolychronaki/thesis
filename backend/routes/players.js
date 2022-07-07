const router = require("express").Router();
var player_controller = require("../controllers/players");

router.get("/", player_controller.getPlayers);

router.post("/", player_controller.addPlayer);

router.put("/:id", player_controller.updatePlayer);

router.put("/transfer/:id", player_controller.transferPlayer);

router.get("/free-agents", player_controller.getPlayersFree);

router.get("/team/:id", player_controller.getPlayersByTeam);

router.delete("/:id", player_controller.deletePlayer);

router.get("/:id", player_controller.getSpecificPlayer);

module.exports = router;
