const PatientRecord = require("../models/patientrecord");
const PatientHistory = require("../models/patientHistory");

exports.uploadPackagesFiles = (req, res) => {
    res.status(201).json({
        message: `Images uploaded successfully !`
    })
};

exports.addPackages = (req, res, next) => {
    const patientRecord = new PatientRecord({
        pkgType: req.body.pkgType,
        pkgName: req.body.pkgName,
        duration: req.body.duration,
        desc: req.body.desc,
        facilities: req.body.facilities,
        temsConditions: req.body.temsConditions,
        price: req.body.price,
        season: req.body.season
    });
    patientRecord.save().then(result => {
        res.status(201).json({
            message: "Package created successfully !",
            data: {
                ...result,
                id: result._id
            }
        })
    })

        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

// exports.addPatientHistory = (req, res, next) => {
//     const patientHistory = new PatientHistory({
//         patientId: req.body.patientId,
//         familyHistory: req.body.history.familyHistory,
//         pastSurgery: req.body.history.pastSurgery,
//         pastMedicalHistory: req.body.history.pastMedicalHistory,
//         onGoingMedication: req.body.history.onGoingMedication,
//         pastMedication: req.body.history.pastMedication,
//         allergies: req.body.history.allergies
//     });
//     patientHistory.save().then(result => {
//         res.status(201).json({
//             message: "Patient history created successfully !",
//             post: {
//                 ...result,
//                 id: result._id
//             }
//         })
//     })

//         .catch(err => {
//             res.status(500).json({
//                 error: err
//             });
//         });
// };

// exports.getPatientHistoryById = (req, res, next) =>{
//   PatientHistory.findOne({patientId: req.params.patientId}).then(result =>{
//     res.status(200).json({
//       message: result ? "Patient history fetched successfully!" : "No data found!",
//       data: result
//     })
//   })
// };

// exports.getRecentRecord = (req, res, next) =>{
//   PatientRecord.find({patientId: req.params.patientId}).limit(1).sort({$natural:-1}).then(result =>{
//     res.status(200).json({
//       message: result ? "Patient record fetched successfully!" : "No data found!",
//       data: result
//     })
//   })
// };

// exports.getPatientRecordById = (req, res, next) => {
//     PatientRecord.findById({ _id: req.params.id }).then(result => {
//         res.status(200).json({
//             message: "Patient record fetched successfully!",
//             data: result
//         })
//     })
// };

// exports.updatePatientHistory = (req, res, next) => {
//     const updatePatientHistory = new PatientHistory({
//         _id: req.body._id,
//         familyHistory: req.body.history.familyHistory,
//         pastSurgery: req.body.history.pastSurgery,
//         pastMedicalHistory: req.body.history.pastMedicalHistory,
//         onGoingMedication: req.body.history.onGoingMedication,
//         pastMedication: req.body.history.pastMedication,
//         allergies: req.body.history.allergies
//     })

//     PatientHistory.updateOne({ _id: req.body._id }, updatePatientHistory).then(result => {
//         if (result.n > 0) {
//             res.status(200).json({
//                 message: 'Patient history updated successfully!'
//             })
//         } else {
//             res.status(401).json({
//                 message: 'Patient history update failed!',
//             })
//         }
//     })
// };

// exports.updatePatientRecord = (req, res, next) => {
//     const updatePatientRecord = new PatientRecord({
//         _id: req.body._id,
//         patientId: req.body.patientId,
//         doctorId: req.body.doctorId,
//         complaint: req.body.complaint,
//         diagnosis: req.body.diagnosis,
//         testSuggested: req.body.testSuggested,
//         testReport: req.body.testReport,
//         temp: req.body.temp,
//         pulse: req.body.pulse,
//         bp: req.body.bp,
//         weight: req.body.weight,
//         height: req.body.height,
//         medicines: req.body.medicines,
//         doctorAdvice: req.body.doctorAdvice,
//         nextFollowup: req.body.nextFollowup,
//         certificates: req.body.certificates
//     });

//     PatientRecord.updateOne({ _id: req.body._id }, updatePatientRecord).then(result => {
//         if (result.n > 0) {
//             res.status(200).json({
//                 message: 'Patient record updated successfully!',
//                 data: {
//                   id: req.body._id
//                 }
//             })
//         } else {
//             res.status(401).json({
//                 message: 'Patient record update failed!',
//             })
//         }
//     })
// };
