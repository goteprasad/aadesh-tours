const mongoose = require("mongoose");

const packagesSchema = mongoose.Schema({
    pkgType: { type: String, required: true },
    pkgName: { type: String, required: true },
    duration: { type: String, required: true },
    desc: { type: String, required: true },
    facilities: { type: String },
    temsConditions: { type: String },
    price: { type: String, required: true },
    season: { type: String }
})

module.exports = mongoose.model("Packages", packagesSchema);
