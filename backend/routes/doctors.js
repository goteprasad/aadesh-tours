const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctor");

router.post("/add-doctor", doctorController.createDoctor);

router.get("/getDoctorById/:id", doctorController.getDoctorById);

router.get("/getDoctors", doctorController.getDoctors);

module.exports = router;
