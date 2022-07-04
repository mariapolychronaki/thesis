const router = require("express").Router();
var attacking_midfielder_center_controller = require("../controllers/attacking_midfielder_center");

router.get("/", attacking_midfielder_center_controller.getAttackingMidfielderCenters);

router.post("/", attacking_midfielder_center_controller.addAttackingMidfielderCenter);

router.put("/:id", attacking_midfielder_center_controller.updateAttackingMidfielderCenter);

router.get("/player/:id", attacking_midfielder_center_controller.getSpecificPlayer);

router.get("/player/:id/rating", attacking_midfielder_center_controller.getSpecificPlayerRating);

router.delete("/:id", attacking_midfielder_center_controller.deleteAttackingMidfielderCenter);

router.get("/:id", attacking_midfielder_center_controller.getSpecificAttackingMidfielderCenter);

module.exports = router;
