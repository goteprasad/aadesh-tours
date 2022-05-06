const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const User = require("./models/user");
const userRoutes = require("./routes/user");
const packagesRoutes = require("./routes/packages");
const path = require("path");
const bcrypt = require("bcrypt");

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'backend/files')));

// Serve only the static files form the dist directory

// app.get('/', function(req,res) {
    
// res.sendFile(path.join(__dirname, '/dist/index.html'));
// });

mongoose.connect("mongodb://localhost:27017/aadesh-tours", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database !");
        User.findOne({ userRole: "admin" }).then(async (user) => {
            if (!user) {
                const user = new User({
                    userRole: "admin",
                    userName: "admin",
                    password: "admin1234",
                    name: 'Admin',
                    phone: '9860402800',
                    email: 'gote.prasadw@gmail.com'
                });

                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);

                user
                    .save()
                    .then((result) => {
                        console.log("Admin user created successfully!");
                    })
                    .catch(() => {
                        console.log("Admin user creation failed!");
                    });
            }
        });
    })
    .catch(() => {
        console.log("Connection failed !");
    })

app.use("/api/user", userRoutes);
app.use("/api/packages", packagesRoutes);

module.exports = app;