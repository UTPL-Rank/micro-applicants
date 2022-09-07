const express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

// built-in middleware for json 
app.use(express.json());

//Routes applicant
app.use('/applicant', require('./routes/applicant/get_applicant'));
app.use('/applicant', require('./routes/applicant/post_applicant'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});