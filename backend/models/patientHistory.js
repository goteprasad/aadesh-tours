const mongoose = require("mongoose");

const patientHistorySchema = mongoose.Schema({
    patientId: { type: String, required: true },
    familyHistory: { type: Array },
    pastSurgery: { type: Array },
    pastMedicalHistory: { type: Array },
    onGoingMedication: { type: Array },
    pastMedication: { type: Array },
    allergies: { type: Array }
})

module.exports = mongoose.model("PatientHistory", patientHistorySchema);
