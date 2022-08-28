const mongoose = require("mongoose");

const Ranges = {
	A: 0,
	B: 1,
	C: 2,
	D: 3
}

const Schema = mongoose.Schema;

const playerSchema = new Schema(
  {
    idPostulante: {
      type: Schema.Types.ObjectId,
      ref: "Applicant",
    },
    aciertos: [
      {
        tematica: "Biologia",
        porcentaje: Number
      },
    ],
    puntajeGlobal: Number,
    rango: Ranges
  },
  { versionKey: false }
);

playerSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
