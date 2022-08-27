const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const registerSchema = new Schema(
  {
    carrera: String,
    tematica: [
      {
        type: String,
      },
    ],
  },
  { versionKey: false }
);

registerSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;
