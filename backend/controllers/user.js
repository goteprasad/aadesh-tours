const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

exports.login = (req, res, next) => {

    let filteredUser;
    let usertype = '';
    usertype = req.body.userRole;

    User.findOne({ userName: req.body.userName }).then(user => {
        // console.log(user)
        if (!user) {
            res.status(401).json(
                { message: 'Authentication Failed' }
            )
        }
        filteredUser = user;
        return bcrypt.compare(req.body.password, filteredUser.password);
    }).then(result => {
        if (!result) {
            res.status(401).json(
                { message: "Authentication Failed" }
            )
        }
        const token = jwt.sign(
            { userName: filteredUser.userName, userId: filteredUser._id },
            process.env.JWT_KEY,
            { expiresIn: '1h' }
        )
        res.status(200).json(
            {
                message: 'User logged in successfully !',
                token: token,
                expiresIn: 3600,
                userId: filteredUser._id,
                userRole: filteredUser.userRole,
                userData: {
                    name: filteredUser.name,
                    phone: filteredUser.phone,
                    email: filteredUser.email
                }
            }
        )
    }).catch(error => {
        return res.status(401).json({
            message: 'Authentication Failed'
        })
    })
};

exports.signUp = (req, res, next) => {

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                userRole: req.body.userRole,
                userName: req.body.userName,
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                password: hash,

            });
            user.save().then(result => {
                res.status(201).json({
                    message: "User registered successfully !",
                    result: result
                })
            })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    });
                });
        });
}

exports.sendMail = async (req, res, next) => {
    try {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        // let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'prasad.gote14321@gmail.com', // generated ethereal user
                pass: 'hdfgjdokmxdkbdro', // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false // should be remove on production
            }
        });

        const reqBody = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message
        }

        const msgHtml = `
        <p><b>Message from : </b> ${reqBody.name}</p>
        <p><b>Email : </b> ${reqBody.email}</p>
        <p><b>Phone : </b> ${reqBody.phone}</p>
        <p><b>Message : </b> ${reqBody.message}</p>
    `;

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Aadesh tours" <prasad.gote14321@gmail.com>', // sender address
            to: "gote.prasadw@gmail.com", // list of receivers
            subject: "Enquiry from Aadesh tours website", // Subject line
            text: "Hello Aadesh tours", // plain text body
            html: msgHtml, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

        res.status(200).json({
            message: 'Message sent successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            message: error
        })
    }
}
