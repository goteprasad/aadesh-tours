const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const patientSchema = mongoose.Schema({
    fName: { type: String, required: true },
    mName: { type: String, required: true },
    lName: { type: String, required: true },
    age: { type: Number, required: true },
    ageCat: { type: String, required: true },
    gender: { type: String, required: true },
    mobile: { type: Number, required: true, unique: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    refBy: { type: String }
})

patientSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Patient", patientSchema);