const User = require("../models/userModel");
const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const secretKey = process.env.SECRET_KEY;

function register(req, res) {
    const { username, password } = req.body;
    userRepository.findOne(username, (err, user) => {
        if (err) {
            return res.status(500).json({
                error: err.message,
            });
        }
        if (user) {
            return res.status(401).json({
                message: "Username is already exists",
            });
        }
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const newUser = new User(username, hashedPassword);
        userRepository.save(newUser, (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: err.message,
                });
            }
            return res.status(201).json({
                message: "User registered successfully",
            });
        });
    });
}

function login(req, res) {
    const { username, password } = req.body;
    userRepository.findOne(username, (err, user) => {
        if (!user) {
            return res.status(401).json({
                message: "Invalid username or password",
            });
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (err || !result) {
                return res.status(401).json({
                    message: "Invalid username or password",
                });
            }
            const token = jwt.sign(
                {
                    username: user.username,
                },
                secretKey,
                {
                    expiresIn: "30d",
                }
            );
            return res.json({ jwt_token: token });
        });
    });
}

module.exports = {
    register,
    login,
};
