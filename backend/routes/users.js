const router = require("express").Router();
var user_controller = require("../controllers/users");

router.get("/", user_controller.getUsers);

router.post("/", user_controller.addUser);

router.put("/:id", user_controller.updateUser);

router.delete("/:id", user_controller.deleteUser);

router.get("/:id", user_controller.getSpecificUser);

module.exports = router;