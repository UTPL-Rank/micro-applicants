const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema(
  {
    idPostulante: {
      type: Schema.Types.ObjectId,
      ref: "Applicant",
    },
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
