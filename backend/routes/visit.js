const express = require("express");
const router = express.Router();

const visitController = require("../controllers/visit");

router.post("/addAppointment", visitController.addAppointment);

router.get("/getAppointments", visitController.getAppointments);

router.put("/updateAppointment/:id", visitController.updateAppointment);

module.exports = router;
