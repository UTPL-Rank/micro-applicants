const express = require("express");
const app = express();

// built-in middleware for json 
app.use(express.json());

//Routes applicant
app.use('/applicant', require('./routes/applicant/get_applicant'));

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server };