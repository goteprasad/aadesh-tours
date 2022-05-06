const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.post("/login", userController.login);
router.post("/singup", userController.signUp);
router.post("/sendMail", userController.sendMail);

module.exports = router;
