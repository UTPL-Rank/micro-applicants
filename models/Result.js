const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resultSchema = new Schema(
  {
    notaFinal: Number,
    fechaEvaluacion: Date,
    postulante: {
      type: Schema.Types.ObjectId,
      ref: "Applicant",
    },
  },
  { versionKey: false }
);

resultSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
