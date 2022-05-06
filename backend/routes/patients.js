const express = require("express");
const router = express.Router();

const patientController = require("../controllers/patient");

router.post("/addPatient", patientController.addPatient);

router.put("/updatePatient/:id", patientController.updatePatient);

router.get("/getPatientById/:id", patientController.getPatientById);

router.get("/getPatients", patientController.getPatients);

module.exports = router;
