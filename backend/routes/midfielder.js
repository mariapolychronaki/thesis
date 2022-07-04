const router = require("express").Router();
var midfielder_controller = require("../controllers/midfielder");

router.get("/", midfielder_controller.getMidfielders);

router.post("/", midfielder_controller.addMidfielder);

router.put("/:id", midfielder_controller.updateMidfielder);

router.get("/player/:id", midfielder_controller.getSpecificPlayer);

router.get("/player/:id/rating", midfielder_controller.getSpecificPlayerRating);

router.delete("/:id", midfielder_controller.deleteMidfielder);

router.get("/:id", midfielder_controller.getSpecificMidfielder);

module.exports = router;
