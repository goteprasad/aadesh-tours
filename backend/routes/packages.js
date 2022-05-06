const express = require("express");
const router = express.Router();

const extractFile = require("../middleware/package-files");

const packagesController = require("../controllers/packages");

router.post('/uploadPackagesFiles', extractFile, packagesController.uploadPackagesFiles);

router.post("/addPackages", packagesController.addPackages);

// router.post("/addPatientHistory", patientRecordController.addPatientHistory);

// router.get("/getPatientHistoryById/:patientId", patientRecordController.getPatientHistoryById);

// router.get("/getPatientRecordById/:id", patientRecordController.getPatientRecordById);

//Get patient recent record

// router.get("/getRecentRecord/:patientId", patientRecordController.getRecentRecord);

// router.put("/updatePatientHistory/:id", patientRecordController.updatePatientHistory);

// router.put("/updatePatientRecord/:id", patientRecordController.updatePatientRecord);

module.exports = router;
