const Applicant = require("../../models/Applicant");
const Player = require("../../models/Player");
const Register = require("../../models/Register");
const Result = require("../../models/Result");

const mongodb = require("../../mongo_db");

// Display Applicant
exports.applicant_get_byId = async (req, res) => {
  const { identificacion } = req.params;
  try {
    let applicant = await Applicant.findOne({ identificacion });
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

// Request a new Applicant

exports.applicant_create_post = async (req, res) => {
  const {
    nombre,
    apellido,
    correoElectronico,
    identificacion,
    edad,
    inscripciones,
  } = req.body;

  let applicant = new Applicant({
    nombre,
    apellido,
    correoElectronico,
    identificacion,
    edad,
  });
  try {
    inscripciones.forEach(async (inscripcion) => {
      let value = inscripcion.carrera;
      let carrera = await Register.findOne({ value });
      applicant.inscripciones = applicant.inscripciones.concat(carrera._id);
    });
    let savedApplicant = await applicant.save();
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

//Search and get Applicant by email

exports.applicant_get_byEmail = async (req, res) => {
  const { correoElectronico } = req.params;
  try {
    let applicant = await Applicant.findOne({ correoElectronico });
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

//Add result of an Applicant

exports.applicant_add_result = async (req, res) => {
  const { identificacion } = req.params;
  const { notaFinal } = req.body;
  try {
    let applicant = await Applicant.findOne({ identificacion });
    if (applicant == null) {
      let message = "Postulante no existe";
      return res.status(400).json({
        success: false,
        message: message,
      });
    }
    const result = new Result({
      notaFinal,
      fechaEvaluacion: Date.now(),
      postulante: applicant._id,
    });
    let savedResult = await result.save();
    applicant.resultados = applicant.resultados.concat(result._id);
    await applicant.save();
    return res.status(200).json({
      success: true,
      message: "Resultado guardado",
      savedResult,
    });
  } catch (err) {
    let message = "Error no definido";
    return res.status(400).json({
      success: false,
      message: message,
    });
  }
};

//Update result Applicant

exports.applicant_update_byId = async (req, res) => {
  const { identificacion } = req.params;
  try {
    let applicant = await Applicant.findOne({ identificacion });
    if (applicant == null) {
      let message = "Postulante no existe";
      return res.status(400).json({
        success: false,
        message: message,
      });
    } else {
      await applicant.update({ $set: req.body });
      return res.status(200).json({
        success: true,
        message: "Postulante Actualizado",
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
