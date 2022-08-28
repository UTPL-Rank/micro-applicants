const express = require('express');
const router = express.Router();
const app = express();

// built-in middleware for json 
app.use(express.json());


//Controller Applicant
const applicant_controller = require('../../controllers/applicant/applicantController');


//GET All Applicants
router.get('/applicants', applicant_controller.applicant_list);
router.get('/:correoElectronico', applicant_controller.applicant_get_byEmail);
router.get("/:identificacion", applicant_controller.applicant_get_byId);

module.exports = router;