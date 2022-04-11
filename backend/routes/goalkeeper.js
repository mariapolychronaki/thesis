const router = require("express").Router();
var goalkeeper_controller = require("../controllers/goalkeeper");

router.get("/", goalkeeper_controller.getGoalkeepers);

router.post("/", goalkeeper_controller.addGoalkeeper);

router.put("/:id", goalkeeper_controller.updateGoalkeeper);

router.delete("/:id", goalkeeper_controller.deleteGoalkeeper);

router.get("/:id", goalkeeper_controller.getSpecificGoalkeeper);

module.exports = router;
