const router = require("express").Router();
var game_rating_controller = require("../controllers/game_rating");

router.get("/", game_rating_controller.getRatings);

router.post("/", game_rating_controller.addRating);

router.put("/:id", game_rating_controller.updateRating);

router.get("/team/:id", game_rating_controller.getSpecificTeamGameRating);

router.delete("/:id", game_rating_controller.deleteRating);

router.get("/:id", game_rating_controller.getSpecificRating);

router.get("/:id/player/:id", game_rating_controller.getSpecificPlayerRating);

module.exports = router;
