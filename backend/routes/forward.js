const router = require("express").Router();
var forward_controller = require("../controllers/forward");

router.get("/", forward_controller.getForwards);

router.post("/", forward_controller.addForward);

router.put("/:id", forward_controller.updateForward);

router.delete("/:id", forward_controller.deleteForward);

router.get("/player/:id/rating", forward_controller.getSpecificPlayerRating);

router.get("/player/:id", forward_controller.getSpecificPlayer);

router.get("/:id", forward_controller.getSpecificForward);

module.exports = router;
