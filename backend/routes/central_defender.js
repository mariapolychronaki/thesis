const router = require("express").Router();
var central_defender_controller = require("../controllers/central_defender");

router.get("/", central_defender_controller.getCentralDefenders);

router.post("/", central_defender_controller.addCentralDefender);

router.get("/player/:id", central_defender_controller.getSpecificPlayer);

router.get("/player/:id/rating", central_defender_controller.getSpecificPlayerRating);

router.put("/:id", central_defender_controller.updateCentralDefender);

router.delete("/:id", central_defender_controller.deleteCentralDefender);

router.get("/:id", central_defender_controller.getSpecificCentralDefender);

module.exports = router;
