const express = require('express');
const router = express.Router();
const app = express();

// built-in middleware for json 
app.use(express.json());

router.get('/applicants', (req, res) => {
    res.status(200).send('All Applicants');
});

module.exports = router;