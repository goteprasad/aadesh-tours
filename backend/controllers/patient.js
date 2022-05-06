const Patient = require("../models/patient");

exports.addPatient = (req, res, next) => {
    const patient = new Patient({
        fName: req.body.personalDetails.fName,
        mName: req.body.personalDetails.mName,
        lName: req.body.personalDetails.lName,
        age: req.body.personalDetails.age,
        ageCat: req.body.personalDetails.ageCat,
        gender: req.body.personalDetails.gender,
        mobile: req.body.contactDetails.mobile,
        address: req.body.contactDetails.address,
        city: req.body.contactDetails.city,
        refBy: req.body.otherDetail.refBy
    })

    Patient.findOne({
        mobile: req.body.contactDetails.mobile
    })

        .then(isMobile => {
            if (isMobile) {
                return res.status(409).json({
                    message: "Patient with same mobile number already exists"
                })
            }
        })

        .catch(err => {
            res.status(500).json({
                error: err
            });
        });

    patient.save().then((result) => {
        res.status(201).json({
            message: "Patient registered successfully!",
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

exports.updatePatient = (req, res, next) => {
    const updatePatient = new Patient({
        _id: req.body._id,
        fName: req.body.personalDetails.fName,
        mName: req.body.personalDetails.mName,
        lName: req.body.personalDetails.lName,
        age: req.body.personalDetails.age,
        ageCat: req.body.personalDetails.ageCat,
        gender: req.body.personalDetails.gender,
        mobile: req.body.contactDetails.mobile,
        address: req.body.contactDetails.address,
        city: req.body.contactDetails.city,
        refBy: req.body.otherDetail.refBy
    })

    Patient.updateOne({ _id: req.body._id }, updatePatient).then(result => {
        if (result.n > 0) {
            res.status(200).json({
                message: 'Patient updated successfully!',
            })
        } else {
            res.status(401).json({
                message: 'Patient update failed!',
            })
        }
    })
};

exports.getPatientById = (req, res, next) => {
    Patient.findById({ _id: req.params.id }).then(result => {
        res.status(200).json({
            message: "Patient details fetched successfully!",
            data: result
        })
    })
};

exports.getPatients = (req, res, next) => {
    Patient.find().then(data => {
        res.status(200).json({
            message: 'Patients fetched successfully!',
            data: data
        })
    })
};
