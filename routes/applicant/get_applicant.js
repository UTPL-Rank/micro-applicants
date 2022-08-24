const express = require('express');
const router = express.Router();
const app = express();

// built-in middleware for json 
app.use(express.json());


//Controller Applicant
const applicant_controller = require('../../controllers/applicant/applicantController');


//GET All Applicants
router.get('/applicants', applicant_controller.applicant_list);

module.exports = router;