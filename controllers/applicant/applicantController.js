const Applicant = require("../../models/Applicant");
const Player = require("../../models/Player");
const Register = require("../../models/Register");
const Result = require("../../models/Result");

const mongodb = require("../../mongo_db");

// Display list of all Applicants.
exports.applicant_list = (req, res) => {
  res.send("NOT IMPLEMENTED: Applicant list");
};

exports.applicant_create_post = async (req, res) => {
  const { nombre, apellido, correoElectronico, identificacion, edad } =
    req.body;

  const applicant = new Applicant({
    nombre,
    apellido,
    correoElectronico,
    identificacion,
    edad,
  });
  try {
    const savedApplicant = await applicant.save();
    return res.status(201).json({
      success: true,
      message: "Postulante Creado",
      savedApplicant,
    });
  } catch (err) {
    let message = "Ha ocurrido un error";
    return res.status(400).json({
      success: false,
      message: message,
    });
  }
};

exports.applicant_get_byEmail = async (req, res) => {
  const { correoElectronico } = req.params;
  try {
    const applicant = await Applicant.findOne({ correoElectronico });
    if (applicant == null) {
      let message = "Postulante no encontrado";
          return res.status(400).json({
            success: false,
            message: message,
          });
    } else {
    return res.status(200).json({
      success: true,
      message: "Postulante encontrado",
      applicant,
    });
  }
  } catch (err) {
    let message = "Error no definido";
    return res.status(400).json({
      success: false,
      message: message,
    });
  }
};