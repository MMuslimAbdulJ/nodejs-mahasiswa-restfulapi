const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const validatedUser = require("../validator/userValidation");

router.post("/register", validatedUser, authController.register);
router.get("/login", validatedUser, authController.login);

module.exports = router;
