const Visit = require("../models/visit");

exports.addAppointment = (req, res, next) => {
    const visit = new Visit({
        patientId: req.body.patientId,
        doctorId: req.body.doctorId,
        patientName: req.body.patientName,
        patientAge: req.body.patientAge,
        patientMobile: req.body.patientMobile,
        patientGender: req.body.patientGender,
        patientAddress: req.body.patientAddress,
        patientCity: req.body.patientCity,
        complaint: req.body.complaint,
        dateCreated: req.body.date,
        visitStatus: req.body.visitStatus,
        visitType: req.body.visitType
    })

    visit.save().then((result) => {
        res.status(201).json({
            message: "Appointment booked successfully!",
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

exports.getAppointments = (req, res, next) => {
    Visit.find().then(data => {
        res.status(200).json({
            message: 'Appointments fetched successfully!',
            data: data
        })
    })
};

exports.updateAppointment = (req, res, next) => {
    const updateVisit = new Visit({
        _id: req.body._id,
        patientId: req.body.patientId,
        doctorId: req.body.doctorId,
        patientName: req.body.patientName,
        patientAge: req.body.patientAge,
        patientMobile: req.body.patientMobile,
        patientGender: req.body.patientGender,
        patientAddress: req.body.patientAddress,
        patientCity: req.body.patientCity,
        complaint: req.body.complaint,
        dateCreated: req.body.date,
        visitStatus: req.body.visitStatus,
        visitType: req.body.visitType
    })

    Visit.updateOne({ _id: req.body._id }, updateVisit).then(result => {
        if (result.n > 0) {
            res.status(200).json({
                message: 'Appointment updated successfully!',
            })
        } else {
            res.status(401).json({
                message: 'Appointment update failed!',
            })
        }
    })
};
