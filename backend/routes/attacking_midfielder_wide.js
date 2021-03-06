const router = require("express").Router();
var attacking_midfielder_wide_controller = require("../controllers/attacking_midfielder_wide");

router.get("/", attacking_midfielder_wide_controller.getAttackingMidfielderWides);

router.post("/", attacking_midfielder_wide_controller.addAttackingMidfielderWide);

router.put("/:id", attacking_midfielder_wide_controller.updateAttackingMidfielderWide);

router.get("/player/:id", attacking_midfielder_wide_controller.getSpecificPlayer);

router.get("/player/:id/rating", attacking_midfielder_wide_controller.getSpecificPlayerRating);

router.delete("/:id", attacking_midfielder_wide_controller.deleteAttackingMidfielderWide);

router.get("/:id", attacking_midfielder_wide_controller.getSpecificAttackingMidfielderWide);

module.exports = router;
