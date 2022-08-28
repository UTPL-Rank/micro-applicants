const express = require("express");
const router = express.Router();

//Controller Applicant
const applicant_controller = require("../../controllers/applicant/applicantController");

//POST create Applicant
router.post("/newApplicant", applicant_controller.applicant_create_post);
router.post("/updateApplicant/:identificacion", applicant_controller.applicant_update_byId);
router.post("/addResult/:identificacion", applicant_controller.applicant_add_result);

module.exports = router;
