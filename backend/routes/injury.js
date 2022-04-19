const router = require("express").Router();
var injury_controller = require("../controllers/injury");

router.get("/", injury_controller.getInjuries);

router.get("/:user_id/", injury_controller.getSpecificPlayerInjury);

router.post("/", injury_controller.addInjury);

router.put("/:id", injury_controller.updateInjury);

router.put("/:user_id/:id", injury_controller.updateUserInjury);

router.delete("/:id", injury_controller.deleteInjury);

router.delete("/:user_id/:id", injury_controller.deleteUserInjury);

router.get("/:id", injury_controller.getSpecificInjury);

module.exports = router;
