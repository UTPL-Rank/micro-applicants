const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const applicantSchema = new Schema(
  {
    nombre: String,
    apellido: String,
    correoElectronico: {
      type: String,
      required: true,
      unique: true,
    },
    identificacion: String,
    edad: Number,
    inscripciones: [
      {
        type: Schema.Types.ObjectId,
        ref: "Register",
      },
    ],
    resultados: [
      {
        type: Schema.Types.ObjectId,
        ref: "Result",
      },
    ],
    jugador: {
      type: Schema.Types.ObjectId,
      ref: "Player",
    },
  },
  { versionKey: false }
);

applicantSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
  },
});

applicantSchema.plugin(uniqueValidator);

const Applicant = mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;
