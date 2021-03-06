const router = require("express").Router();
var wide_defender_controller = require("../controllers/wide_defender");

router.get("/", wide_defender_controller.getWideDefenders);

router.post("/", wide_defender_controller.addWideDefender);

router.put("/:id", wide_defender_controller.updateWideDefender);

router.get("/player/:id", wide_defender_controller.getSpecificPlayer);

router.get("/player/:id/rating", wide_defender_controller.getSpecificPlayerRating);

router.delete("/:id", wide_defender_controller.deleteWideDefender);

router.get("/:id", wide_defender_controller.getSpecificWideDefender);

module.exports = router;
