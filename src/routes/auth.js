const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/auth.controller');

// Create routes for user here
router.post('login', AuthController.login);
module.exports = router;