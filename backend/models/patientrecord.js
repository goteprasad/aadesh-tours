const mongoose = require("mongoose");

const patientRecordSchema = mongoose.Schema({
    patientId: { type: String, required: true },
    doctorId: { type: String, required: true },
    complaint: { type: Array, required: true },
    diagnosis: { type: String, required: true },
    testSuggested: { type: String },
    testReport: { type: Array },
    temp: { type: Number },
    pulse: { type: Number },
    bp: { type: String },
    weight: { type: Number },
    height: { type: Number },
    medicines: { type: Array, required: true },
    doctorAdvice: { type: String },
    nextFollowup: { type: Date },
    certificates: { type: Array }
},
{
  timestamps: true
})

module.exports = mongoose.model("PatientRecord", patientRecordSchema);
