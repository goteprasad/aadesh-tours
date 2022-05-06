const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const doctorSchema = mongoose.Schema({
    drSpecialization: { type: String, required: true },
    drName: { type: String, required: true },
    drFees: { type: Number, required: true },
    drContact: { type: Number, required: true },
    drEmail: { type: String, required: true, unique: true },
    drUserName: { type: String, required: true },
    drPassword: { type: String, required: true },
})

doctorSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Doctor", doctorSchema);