const Doctor = require("../models/doctor");
const bcrypt = require("bcrypt");

exports.createDoctor = (req, res, next) => {

    bcrypt.hash(req.body.drPassword, 10)
        .then(hash => {
            const doctor = new Doctor({
                drSpecialization: req.body.drSpecialization,
                drName: req.body.drName,
                drFees: req.body.drFees,
                drContact: req.body.drContact,
                drEmail: req.body.drEmail,
                drUserName: req.body.drUserName,
                drPassword: hash
            });

            Doctor.findOne({
                drEmail: req.body.drEmail
            })

                .then((isEmail) => {
                    if (isEmail) {
                        res.status(409).json({
                            message: "User with same email already exist"
                        })
                    }
                })

                .catch(err => {
                    res.status(500).json({
                        error: err
                    });
                });

            doctor.save().then(result => {
                res.status(201).json({
                    message: "Doctor registered successfully !",
                    result: result
                })
            })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    });
                });
        });
};

exports.getDoctorById = (req, res, next) => {
    Doctor.findById({ _id: req.params.id }).then(result => {
        res.status(200).json({
            message: "Doctor details fetched successfully!",
            data: result
        })
    })
};

exports.getDoctors = (req, res, next) => {
    Doctor.find().then(data => {
        res.status(200).json({
            message: 'Doctors fetched successfully!',
            data: data
        })
    })
};
