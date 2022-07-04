const router = require("express").Router();
var enquiry_controller = require("../controllers/enquiry");

router.get("/", enquiry_controller.getEnquiries);

router.get("/waiting", enquiry_controller.getEnquiriesWaiting);

router.post("/", enquiry_controller.addEnquiry);

router.put("/:id", enquiry_controller.updateEnquiry);

router.delete("/:id", enquiry_controller.deleteEnquiry);

router.get("/:id", enquiry_controller.getSpecificEnquiry);

module.exports = router;
