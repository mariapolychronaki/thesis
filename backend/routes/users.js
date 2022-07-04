const router = require("express").Router();
var user_controller = require("../controllers/users");

router.get("/", user_controller.getUsers);

router.get("/coaches", user_controller.getCoaches);

router.get("/not-verified", user_controller.getUsersNotVerified);

router.post("/", user_controller.addUser);

router.put("/password/:id", user_controller.changePassword);

router.post("/login", user_controller.loginUser);

router.put("/:id", user_controller.updateUser);

router.put("/verify/:id", user_controller.verifyUser);

router.delete("/:id", user_controller.deleteUser);

router.get("/:id", user_controller.getSpecificUser);

module.exports = router;
